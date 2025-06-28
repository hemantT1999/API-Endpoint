const express = require("express");
const adminRoutes = require("./routes/admin");

const app = express();
app.use(express.json());
app.use("/api/admin", adminRoutes);

// Health endpoint
app.get("/health", (req, res) => {
  res.status(200).json({ status: "healthy" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Fraud & Compliance service running on port ${PORT}`);
});
