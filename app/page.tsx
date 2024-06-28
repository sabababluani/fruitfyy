import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header/Header";
import Select from "./components/Inputs/Select/Select";
import BelowHeader from "./components/BelowHeader/BelowHeader";
import Filters from "./components/Filters/Filters";

export default function Home() {
  return (
    <>
      <Header />
      <BelowHeader />
      <Filters/>
    </>
  );
}
