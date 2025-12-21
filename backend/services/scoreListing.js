function extractKeywords(text) {
  if (!text) return [];

  const stopwords = [
    "for", "with", "and", "the", "of", "to", "in", "on", "by", "a", "an"
  ];

  return text
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, "")
    .split(" ")
    .filter(word => word.length > 3 && !stopwords.includes(word));
}

function keywordMatchScore(keywords, textArr) {
  if (!keywords.length || !textArr.length) return 0;

  const text = textArr.join(" ").toLowerCase();
  let count = 0;

  keywords.forEach(word => {
    if (text.includes(word)) count++;
  });

  return count;
}

function scoreListing(data) {
  let totalScore = 0;              // ✅ FIX
  const breakdown = {};

  const title = data.title || "";
  const bullets = data.bullets || [];
  const description = data.description || "";
  const imageCount = data.imageCount || 0;

  const keywords = extractKeywords(title);

  /* ---------- TITLE (25) ---------- */
  let titleScore = 0;
  if (title.length >= 60 && title.length <= 200) titleScore += 20;
  else if (title.length > 30) titleScore += 10;

  if (keywords.length > 0) titleScore += 5;

  breakdown.title = titleScore;
  totalScore += titleScore;

  /* ---------- BULLETS (25) ---------- */
  let bulletScore = 0;

  if (bullets.length >= 5) bulletScore += 15;
  else if (bullets.length >= 3) bulletScore += 10;
  else if (bullets.length > 0) bulletScore += 5;

  const bulletMatch = keywordMatchScore(keywords, bullets);
  if (bulletMatch >= keywords.length / 2) bulletScore += 10;
  else if (bulletMatch > 0) bulletScore += 5;

  breakdown.bullets = bulletScore;
  totalScore += bulletScore;

  /* ---------- IMAGES (25) ---------- */
  let imageScore = 0;

  if (imageCount >= 6) imageScore += 25;
  else if (imageCount >= 3) imageScore += 15;
  else if (imageCount > 0) imageScore += 5;

  breakdown.images = imageScore;
  totalScore += imageScore;

  /* ---------- DESCRIPTION / A+ (25) ---------- */
  let descScore = 0;

  // RULE 1: A+ detected → FULL SCORE
  if (data.hasAPlus) {
    descScore = 25;
  }
  // RULE 2: No A+, but description exists
  else if (description.length > 300) {
    descScore = 25;
  }
  else if (description.length > 150) {
    descScore = 15;
  }
  else if (description.length > 50) {
    descScore = 5;
  }
  else {
    descScore = 0;
  }

  breakdown.description = descScore;
  totalScore += descScore;

  /* ---------- FINAL RETURN ---------- */
  return {
    totalScore: Math.min(totalScore, 100),
    breakdown,
  };
}

module.exports = scoreListing;
