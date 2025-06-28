const express = require("express");
const router = express.Router();

// Admin endpoints
router.post("/login", (req, res) => {
  // ... existing code ...
});

router.get("/fraud-check/:userId", (req, res) => {
  // ... existing code ...
});

module.exports = router;
