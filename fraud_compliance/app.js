const express = require("express");
const app = express();

// Add this root route handler
app.get("/", (req, res) => {
  res.send("Fraud & Compliance Service is running");
});

const adminRoutes = require("./routes/admin");
app.use("/admin", adminRoutes);

app.use(express.json());
app.use("/api/admin", adminRoutes);

// Health endpoint
app.get("/health", (req, res) => {
  res.status(200).json({ status: "healthy" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
