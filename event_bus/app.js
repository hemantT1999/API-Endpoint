const express = require("express");
const eventRoutes = require("./routes/events");

const app = express();
app.use(express.json());
app.use("/api", eventRoutes);

// Health endpoint
app.get("/health", (req, res) => {
  res.status(200).json({ status: "healthy" });
});

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Event Bus service running on port ${PORT}`);
});
