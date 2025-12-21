export default function SampleReportPage() {
  return (
    <main className="min-h-screen px-6 py-20">
      <div className="max-w-4xl mx-auto bg-[#0F172A] border border-white/10 rounded-2xl p-10 text-white">

        <h1 className="text-4xl font-bold mb-6">
          Sample Audit Report
        </h1>

        <p className="text-white/70 mb-10">
          This is a sample Amazon Listing Audit report showcasing how scores
          and recommendations are presented.
        </p>

        <ul className="space-y-3 text-white/80">
          <li>• Title Score: 20 / 25</li>
          <li>• Bullet Points Score: 22 / 25</li>
          <li>• Images Score: 25 / 25</li>
          <li>• Description / A+ Score: 23 / 25</li>
        </ul>

      </div>
    </main>
  );
}
