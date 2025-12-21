const express = require("express");
const cors = require("cors");

const auditRoute = require("./routes/audit");

const app = express();

// ✅ IMPORTANT: Render provides PORT dynamically
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/audit", auditRoute);

app.get("/", (req, res) => {
  res.send("Backend hello running");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
