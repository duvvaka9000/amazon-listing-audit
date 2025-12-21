"use client";

import { useState } from "react";

export default function Home() {
  /* ================= STATE ================= */
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState("");
  
  async function downloadPDF() {
    try {
      const element = document.getElementById("audit-report");
    
      if (!element) {
        alert("Audit report not found. Please run an audit first.");
        return;
      }
    
      const html2pdf = (await import("html2pdf.js")).default;
    
      const options = {
        margin: 10,
        filename: "Amazon_Listing_Audit_Report.pdf",
    
        image: { type: "jpeg" as const, quality: 0.95 },
    
        html2canvas: {
          scale: 2,
          useCORS: true,
          backgroundColor: "#0F172A",
          logging: false,
        },
    
        jsPDF: {
          unit: "mm",
          format: "a4",
          orientation: "portrait" as const,
        },
      };
    
      await html2pdf()
        .set(options)
        .from(element)
        .save();
    } catch (err) {
      console.error("PDF generation error:", err);
      alert("Failed to generate PDF. Please check the browser console for details.");
    }
  }
  
  

  /* ================= API CALL ================= */
  async function handleAudit() {
    if (!url) {
      setError("Please paste an Amazon product URL");
      return;
    }

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const res = await fetch("https://amazon-listing-audit.onrender.com/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });

      const data = await res.json();
      setResult(data);
    } catch (err) {
      setError("Backend not responding. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen">
    

      {/* ====
      ============= HOME ================= */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-6 scroll-mt-32"
      >
        <div className="max-w-4xl text-center">

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Audit Your Amazon Listing Like a Pro
          </h1>

          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-14">
            Instantly analyze SEO, content quality, images, and listing health
            using a structured scoring system.
          </p>

          <div className="
            bg-[#0F172A]
            border border-white/10
            rounded-2xl
            p-8
            shadow-[0_0_30px_rgba(56,189,248,0.15)]
            max-w-2xl
            mx-auto
          ">
            <input
              type="text"
              placeholder="Paste Amazon product URL"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="
                w-full
                bg-[#020617]
                border border-white/10
                rounded-lg
                px-4 py-3
                text-white
                placeholder-white/40
                focus:outline-none
                focus:ring-2
                focus:ring-sky-400
                mb-4
              "
            />

            <button
              onClick={handleAudit}
              disabled={loading}
              className="
                w-full
                bg-sky-400
                hover:bg-sky-300
                text-black
                font-semibold
                py-3
                rounded-lg
                transition
              "
            >
              {loading ? "Analyzing..." : "Analyze Listing"}
            </button>

            {error && (
              <p className="text-red-400 text-sm mt-4">
                {error}
              </p>
            )}

            <p className="text-xs text-white/40 mt-4">
              No login required • Educational project
            </p>
          </div>

          {/* ================= RESULT ================= */}
          {result && result.score && (
  <div
  id="audit-report"
  style={{ backgroundColor: "#0F172A", color: "#ffffff" }}
  className="bg-[#0F172A] border border-white/10 rounded-2xl p-8 text-left"
>


    {/* Product Title */}
    {result.extractedData?.title && (
      <h2 className="text-xl md:text-2xl font-semibold text-white mb-6 leading-snug">
        {result.extractedData.title}
      </h2>
    )}

    {/* Overall Score */}
    <h3 className="text-3xl font-bold mb-6 text-sky-400">
      Overall Score: {result.score.totalScore} / 100
    </h3>

    {/* Score Breakdown */}
    <ul className="space-y-2 text-white/80 mb-8">
      <li>Title: {result.score.breakdown.title}/25</li>
      <li>Bullets Points : {result.score.breakdown.bullets}/25</li>
      <li>Images: {result.score.breakdown.images}/25</li>
      <li>Description / A+: {result.score.breakdown.description}/25</li>
    </ul>

    {/* Recommendations (ONLY IF EXISTS) */}
    {Object.values(result.recommendations).some(
      (items: any) => items.length > 0
    ) && (
      <>
        <h4 className="text-2xl font-semibold mb-4 text-white">
          Improvement Recommendations
        </h4>

        {Object.entries(result.recommendations).map(
          ([section, items]: any) =>
            items.length > 0 && (
              <div key={section} className="mb-6">
                <h5 className="capitalize font-semibold text-sky-400 mb-2">
                  {section}
                </h5>
                <ul className="list-disc pl-6 text-white/70 space-y-1">
                  {items.map((rec: string, i: number) => (
                    <li key={i}>{rec}</li>
                  ))}
                </ul>
              </div>
            )
        )}
      </>
    )}
<button
  onClick={downloadPDF}
  className="
    mt-10
    w-full
    bg-sky-400
    hover:bg-sky-300
    text-black
    font-semibold
    py-3
    rounded-lg
    transition
  "
>
  Download Audit Report (PDF)
</button>




  </div>
)}

        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      {/* (UNCHANGED – YOUR ORIGINAL CONTENT) */}
<section
        id="how-it-works"
        className="scroll-mt-32 px-6 py-28"
      >
        <div className="
          max-w-5xl
          mx-auto
          bg-[#0F172A]
          border border-white/10
          rounded-2xl
          shadow-[0_0_30px_rgba(56,189,248,0.12)]
          overflow-hidden
        ">

          <div className="bg-[#020617] px-8 py-12 border-b border-white/10 text-center">
            <h2 className="text-4xl font-extrabold">
              How This Tool Works
            </h2>
            <p className="text-white/60 mt-4 max-w-2xl mx-auto">
              Step-by-Step process
            </p>
            {/* ================= PART 1 ================= */}
<div className="px-10 py-16 border-b border-white/10">

<h3 className="text-3xl font-bold text-white mb-4 text-center">
  Step 1: Find the Amazon Product URL
</h3>

<p className="text-white/60 text-lg max-w-2xl mx-auto text-center mb-14">
  Before running an audit, you need the correct Amazon product page URL.
  <br />
  Follow the steps below based on your device.
</p>

<div className="grid grid-cols-1 md:grid-cols-2 gap-10">

  {/* Desktop */}
  <div className="bg-[#020617] border border-white/10 rounded-2xl p-8">
    <h4 className="text-xl font-semibold text-white mb-4">
      On Desktop (Browser)
    </h4>

    <ol className="space-y-3 text-white/70 list-decimal list-inside text=lg text-left">
      <li>Open Amazon.in in your browser</li>
      <li>Search for the product</li>
      <li>Open the product detail page</li>
      <li>Copy the URL from the browser address bar</li>
    </ol>
  </div>

  {/* Mobile */}
  <div className="bg-[#020617] border border-white/10 rounded-2xl p-8 ">
    <h4 className="text-xl font-semibold text-white mb-4">
      On Mobile (Amazon App)
    </h4>

    <ol className="space-y-3 text-white/70  list-decimal list-inside text-left text=lg ">
  
      <li>Open the Amazon app</li>
      <li>Go to the product page</li>
      <li>Tap the “Share” button</li>
      <li>Select “Copy Link”</li>
    </ol>
  </div>
</div>
</div>
{/* ================= PART 2 ================= */}
<div className="px-10 py-20 space-y-16">

  <h3 className="text-3xl font-bold text-white text-center mb-6">
    Step 2: How the Audit Tool Works
  </h3>

  {/* ================= HOW THE AUDIT WORKS ================= */}
<div className="px-10 py-20">


<p className="text-white/60 text-lg text-center max-w-2xl mx-auto mb-16">
 
</p>

<div className="grid grid-cols-1 md:grid-cols-4 text-left text-lg gap-8">

  <FlowCard
    title="Input"
    desc="Paste the Amazon product URL into the audit tool."
  />

  <FlowCard
    title="Extract"
    desc="Public listing data is automatically collected and structured."
  />

  <FlowCard
    title="Analyze"
    desc="SEO, content quality, and media completeness are evaluated."
  />

  <FlowCard
    title="Report"
    desc="A final score with improvement recommendations is generated."
  />

</div>
</div>


</div>

          </div>



          

        </div>
      </section>

      {/* ================= FEATURES ================= */}
      {/* (UNCHANGED – YOUR ORIGINAL CONTENT) */}
<section
        id="features"
        className="scroll-mt-32 px-6 py-28"
      >
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-4xl font-extrabold mb-4">
            Key Features
          </h2>

          <p className="text-white/70 mb-16 max-w-2xl mx-auto">
            A structured system designed to evaluate every critical aspect
            of an Amazon product listing.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            <Feature title="SEO & Keyword Analysis" />
            <Feature title="Image & Media Evaluation" />
            <Feature title="Bullet Point Optimization" />
            <Feature title="Description & A+ Review" />
            <Feature title="Quality Score (0–100)" />
            <Feature title="Actionable Recommendations" />

          </div>

        </div>
      </section>

    </main>
  );
}

/* ================= COMPONENTS ================= */

function Feature({ title }: { title: string }) {
  return (
    <div className="
      bg-[#0F172A]
      border border-white/10
      rounded-2xl
      p-8
      hover:shadow-[0_0_30px_rgba(56,189,248,0.15)]
      transition
    ">
      <div className="text-sky-400 text-3xl mb-4">✓</div>
      <h3 className="text-xl font-semibold">
        {title}
      </h3>
    </div>
  );
}

function FlowCard({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div className="
      bg-[#020617]
      border border-white/15
      rounded-2xl
      p-5
      text-center
      hover:shadow-[0_0_30px_rgba(56,189,248,0.12)]
      transition
    ">
      <h4 className="text-xl font-semibold text-white mb-3">
        {title}
      </h4>
      <p className="text-white/70 text-lg leading-relaxed">
        {desc}
      </p>
    </div>
  );
}
