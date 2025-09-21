//import Image from "next/image";
import Card from "./components/Card";

export default function Home() {
  return (
    <>
      <Card name="Explorando React"
        description="Una introducción profunda a la librería de UI más popular del mundo."
        imageUrl="/file.svg"
        birthDate="24"
      ></Card>
      <br></br>
      <Card name="Explorando React 2"
        description="Una introducción profunda a la librería de UI más popular del mundo."
        imageUrl="/next.svg"
        birthDate="24"
      ></Card>
    </>
  );
}
