
import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold text-center p-20">Bookstore App</h1>
      <Image src={"/Logo.jpg"} alt="Logo" width={500} height={500} className="mx-auto" />
    </>
  );
}
