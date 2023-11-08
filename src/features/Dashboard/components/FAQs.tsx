interface FAQsProps {
  number?: number;
  question: string;
  answer: string;
}

export default function FAQs({ number, question, answer }: FAQsProps) {
  return (
    <div>
      <p className="text-[1.6rem] text-jubalGrey font-[700]">{`${number}. ${question}?`}</p>
      <p className="text-[1.6rem] mt-[1rem] text-jubalFAQGrey">{answer}</p>
    </div>
  );
}
