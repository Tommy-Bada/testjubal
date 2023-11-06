import Image from "next/image";

interface ContactProps {
  image: string;
  title: string;
  text: string;
}

export default function Contact({ image, title, text }: ContactProps) {
  return (
    <div className="w-[30%]">
      <Image src={process.env.NEXT_PUBLIC_SITE_BASE_URL+"/"+image} alt="icon" width="30" height="30" />
      <h1 className="my-[2rem] text-[2rem]  text-jubalGrey font-[700]">
        {title}
      </h1>
      <p className="text-[1.6rem] text-jubalFooterText ">{text}</p>
    </div>
  );
}
