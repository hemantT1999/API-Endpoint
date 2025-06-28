const express = require("express");
const ledgerRoutes = require("./routes/ledger");

const app = express();
app.use(express.json());
app.use("/api", ledgerRoutes);

// Health endpoint
app.get("/health", (req, res) => {
  res.status(200).json({ status: "healthy" });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Wallet service running on port ${PORT}`);
});
