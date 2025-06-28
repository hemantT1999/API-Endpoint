const express = require("express");
const app = express();

// Add root route handler
app.get("/", (req, res) => {
  res.send("Wallet Service is running");
});

const ledgerRoutes = require("./routes/ledger");

app.use(express.json());
app.use("/api", ledgerRoutes);

// Health endpoint
app.get("/health", (req, res) => {
  res.status(200).json({ status: "healthy" });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Wallet Service running on port ${PORT}`);
});
