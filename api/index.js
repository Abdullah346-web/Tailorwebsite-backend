const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Backend running on Vercel 🚀" });
});

// ❌ app.listen() mat likhna
module.exports = app;
