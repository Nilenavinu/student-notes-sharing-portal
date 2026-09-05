const Note = require("../models/Note");

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

module.exports = {
    uploadNote,
    getAllNotes
};