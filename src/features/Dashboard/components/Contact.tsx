import Image from "next/image";

interface ContactProps {
  image: string;
  title: string;
  text: string;
}

export default function Contact({ image, title, text }: ContactProps) {
  return (
    <div className="w-[30%]">
      <Image src={image} alt="icon" width="36" height="36" />
      <h1 className="my-[2rem] text-[2.4rem] text-jubalFormText font-[700]">
        {title}
      </h1>
      <p className="text-[2rem] text-jubalFooterText ">{text}</p>
    </div>
  );
}
