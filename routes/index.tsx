import { Header } from "../components/header";
import { Head } from "../components/head";
import { Footer } from "../components/footer";
import "react-multi-carousel/lib/styles.css";
import { Tops } from "../components/tops";
import { Bottoms } from "../components/bottoms";
import { Accessories } from "../components/accessories";
import { Hero } from "../components/hero";

export const IndexPage = () => {
  return (
    <div>
      <Head />
      <Header />
      <Hero />
      <Tops />
      <Bottoms />
      <Accessories />
      <Footer />
    </div>
  );
};
