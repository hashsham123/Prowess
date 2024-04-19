import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./Components/navbar";
import Cards from "./Components/Cards/cards";
export default function Home() {
  return (
    <>
      <Navbar />
      <Cards />
    </>
  );
}
