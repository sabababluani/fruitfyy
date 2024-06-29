'use client'

import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header/Header";
import Select from "./components/Inputs/Select/Select";
import BelowHeader from "./components/BelowHeader/BelowHeader";
import Filters from "./components/Filters/Filters";
import DiscountCard from "./components/DiscountCard/DiscountCard";
import Products from "./components/Products/Products";
import  Main  from "./components/Main/Main";

export default function Home() {

  return (
    <>
      <BelowHeader />
      <Main/>
    </>
  );
}
