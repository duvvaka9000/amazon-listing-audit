export default function About() {
    return (
      <main className="min-h-screen bg-[#8ECAE6] px-6 py-20">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-10">
          <h1 className="text-3xl font-bold text-[#023047] mb-6">
            About This Project
          </h1>
  
          <p className="text-gray-700 leading-relaxed mb-4">
            Amazon Listing Audit Tool is an educational SaaS project designed to
            analyze and evaluate Amazon product listings based on content quality,
            SEO structure, and media optimization.
          </p>
  
          <p className="text-gray-700 leading-relaxed mb-4">
            The goal of this project is to help sellers and learners understand
            how optimized listings can improve visibility and conversion rates
            on e-commerce platforms.
          </p>
  
          <p className="text-gray-700 leading-relaxed">
            This project is built as part of an academic final-year submission
            and uses publicly available listing information only.
          </p>
        </div>
      </main>
    );
  }
  