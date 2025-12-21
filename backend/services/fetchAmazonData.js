const axios = require("axios");
const cheerio = require("cheerio");

async function fetchAmazonData(url) {
  const response = await axios.get(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120 Safari/537.36",
      "Accept-Language": "en-IN,en;q=0.9",
    },
  });

  const html = response.data;
  const $ = cheerio.load(html);

  /* ---------- TITLE ---------- */
  const title = $("#productTitle").text().trim();

  /* ---------- BULLETS ---------- */
  const bullets = [];

  $("#feature-bullets ul li").each((_, el) => {
    const text = $(el).find("span").first().text().trim();

    if (text && text.length > 20 && text.length < 250) {
      bullets.push(text);
    }
  });

  const finalBullets = bullets.slice(0, 5);

  /* ---------- DESCRIPTION & A+ ---------- */
  let description = "";
  let hasAPlus = false;

  if ($("#productDescription").length) {
    description = $("#productDescription").text().trim();
  }

  if ($("#aplus").length || $("#aplus_feature_div").length) {
    hasAPlus = true;
  }

  if (!description && $("meta[name='description']").length) {
    description = $("meta[name='description']").attr("content");
  }

  description = description.substring(0, 1500);

  /* ---------- IMAGE COUNT ---------- */
  let imageCount = 0;
  $("#altImages img").each(() => {
    imageCount++;
  });

  return {
    title,
    bullets: finalBullets,
    description,
    imageCount,
    hasAPlus,
  };
}

module.exports = fetchAmazonData;
