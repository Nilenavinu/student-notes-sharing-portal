const Note = require("../models/Note");
const path = require("path");
const fs = require("fs");
// Upload Note
const uploadNote = async (req, res) => {
    try {
        const { title, subject, semester, description } = req.body;

        if (!req.file) {
            return res.status(400).json({
                message: "Please upload a PDF file"
            });
        }

        const note = await Note.create({
            title,
            subject,
            semester,
            description,
            fileUrl: `/uploads/${req.file.filename}`,
            uploadedBy: req.user.id
        });

        res.status(201).json({
            message: "Note Uploaded Successfully",
            note
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// Get All Notes (with Search & Filter)
const getAllNotes = async (req, res) => {
    try {

        const { subject, semester } = req.query;

        const filter = {};

        if (subject) {
            filter.subject = subject;
        }

        if (semester) {
            filter.semester = Number(semester);
        }

        const notes = await Note.find(filter).populate(
            "uploadedBy",
            "name email"
        );

        res.status(200).json(notes);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
// Get My Uploaded Notes
const getMyNotes = async (req, res) => {
    try {
        const notes = await Note.find({
            uploadedBy: req.user.id
        }).populate(
            "uploadedBy",
            "name email"
        );

        res.status(200).json(notes);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
// Delete My Note
const deleteNote = async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);

        if (!note) {
            return res.status(404).json({
                message: "Note not found"
            });
        }

        // Make sure the logged-in user owns this note
        if (note.uploadedBy.toString() !== req.user.id) {
            return res.status(403).json({
                message: "You can only delete your own notes"
            });
        }

        // Delete the physical PDF file
        const filePath = path.join(
            __dirname,
            "..",
            note.fileUrl
        );

        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        }

        // Delete note from MongoDB
        await Note.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message: "Note deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
module.exports = {
    uploadNote,
    getAllNotes,
    getMyNotes,
    deleteNote
};