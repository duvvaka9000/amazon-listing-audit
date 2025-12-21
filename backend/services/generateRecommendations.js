function generateRecommendations(scoreBreakdown, extractedData) {
  const recommendations = {
    title: [],
    bullets: [],
    images: [],
    description: [],
  };

  /* ---------- TITLE (25) ---------- */
  if (scoreBreakdown.title < 20) {
    recommendations.title.push(
      "Improve title structure by including brand name, product type, key features, and size/variant in a clear format."
    );
  }

  if (extractedData.title && extractedData.title.split(" ").length > 20) {
    recommendations.title.push(
      "Reduce keyword stuffing in the title to improve readability and compliance with Amazon best practices."
    );
  }

  /* ---------- BULLETS (25) ---------- */
  if (scoreBreakdown.bullets < 15) {
    recommendations.bullets.push(
      "Add at least 4–5 concise bullet points highlighting key benefits and features."
    );
  }

  if (extractedData.bullets && extractedData.bullets.length > 0) {
    const avgBulletLength =
      extractedData.bullets.reduce((sum, b) => sum + b.length, 0) /
      extractedData.bullets.length;

    if (avgBulletLength > 180) {
      recommendations.bullets.push(
        "Shorten bullet points and focus on benefit-driven, scannable content for better readability."
      );
    }
  }

  /* ---------- IMAGES (25) ---------- */
  if (scoreBreakdown.images < 15) {
    recommendations.images.push(
      "Add more high-quality product images to meet Amazon’s recommended minimum of 6 images."
    );
  }

  if (extractedData.imageCount < 6) {
    recommendations.images.push(
      "Include additional lifestyle and usage images to improve visual appeal and conversions."
    );
  }

  /* ---------- DESCRIPTION / A+ (25) ---------- */
  // IMPORTANT RULE:
  // If A+ exists → NO recommendation
  // If no A+ → evaluate description

  if (
    !extractedData.hasAPlus &&
    (!extractedData.description || extractedData.description.length < 150)
  ) {
    recommendations.description.push(
      "Add a detailed product description or A+ content to improve customer understanding and trust."
    );
  }

  return recommendations;
}

module.exports = generateRecommendations;
