const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");

const {
    uploadNote,
    getAllNotes
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

module.exports = router;