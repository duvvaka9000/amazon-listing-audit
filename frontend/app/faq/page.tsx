export default function FAQ() {
    return (
      <main className="min-h-screen bg-[#8ECAE6] px-6 py-20">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-10">
          <h1 className="text-3xl font-bold text-[#023047] mb-8">
            Frequently Asked Questions
          </h1>
  
          <div className="space-y-6">
            <FAQItem
              question="Is this tool officially affiliated with Amazon?"
              answer="No. This is an independent is not affiliated with Amazon."
            />
  
            <FAQItem
              question="Does this tool access private seller data?"
              answer="No. The system analyzes only publicly available information from product listing pages."
            />
  
            <FAQItem
              question="Is the audit score 100% accurate?"
              answer="The score is based on predefined rules and heuristics."
            />
  
            <FAQItem
              question="Can this be used commercially?"
              answer="No. This version is developed for educational Purpose."
            />
          </div>
        </div>
      </main>
    );
  }
  
  function FAQItem({
    question,
    answer,
  }: {
    question: string;
    answer: string;
  }) {
    return (
      <div>
        <h3 className="font-semibold text-[#023047] mb-2">
          {question}
        </h3>
        <p className="text-gray-700 leading-relaxed">
          {answer}
        </p>
      </div>
    );
  }
  