const express = require("express");
const router = express.Router();

const fetchAmazonData = require("../services/fetchAmazonData");
const scoreListing = require("../services/scoreListing");
const generateRecommendations = require("../services/generateRecommendations"); // ✅ FIX

router.post("/", async (req, res) => {
  try {
    const { url } = req.body;

    if (!url) {
      return res.status(400).json({ error: "Amazon URL is required" });
    }

    const extractedData = await fetchAmazonData(url);
    const score = scoreListing(extractedData);

    const recommendations = generateRecommendations(
      score.breakdown,
      extractedData
    );

    res.json({
      success: true,
      extractedData,
      score,
      recommendations,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
