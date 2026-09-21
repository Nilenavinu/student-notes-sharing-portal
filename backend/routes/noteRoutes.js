const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");

const {
    uploadNote,
    getAllNotes,
    getMyNotes,
    deleteNote
} = require("../controllers/noteController");

// Upload Note
router.post(
    "/upload",
    protect,
    upload.single("file"),
    uploadNote
);

// Get All Notes
router.get("/", getAllNotes);
// Get My Uploaded Notes
router.get(
    "/my-notes",
    protect,
    getMyNotes
);
// Delete Note
router.delete(
    "/:id",
    protect,
    deleteNote
);
module.exports = router;