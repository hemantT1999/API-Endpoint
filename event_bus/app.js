const express = require("express");
const app = express();

// Add root route handler
app.get("/", (req, res) => {
  res.send("Event Bus Service is running");
});

const eventRoutes = require("./routes/events");

app.use(express.json());
app.use("/api", eventRoutes);

// Health endpoint
app.get("/health", (req, res) => {
  res.status(200).json({ status: "healthy" });
});

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Event Bus running on port ${PORT}`);
});
