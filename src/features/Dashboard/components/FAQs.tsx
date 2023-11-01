interface FAQsProps {
  number?: number;
  question: string;
  answer: string;
}

export default function FAQs({ number, question, answer }: FAQsProps) {
  return (
    <div>
      <p className="text-[1.8rem] text-jubalFormText font-[700]">{`${number}. ${question}?`}</p>
      <p className="text-[1.8rem] mt-[1rem] text-[#727A86]">{answer}</p>
    </div>
  );
}
