import { Header } from "../components/header";
import { Head } from "../components/head";
import { Footer } from "../components/footer";
import "react-multi-carousel/lib/styles.css";
import { Tops } from "../components/tops";
import { Bottoms } from "../components/bottoms";
import { Accessories } from "../components/accessories";
import { Hero } from "../components/hero";
import { Outfit } from "../components/outfit";
import { useState } from "react";
import { Prompt } from "../components/prompt";

export const IndexPage = () => {
  const [selectedTop, setSelectedTop] = useState<string>();
  const [selectedBottom, setSelectedBottom] = useState<string>();
  const [selectedAccessory, setSelectedAccessory] = useState<string>();

  return (
    <div>
      <Head />
      <Header />
      <Prompt />
      <Hero />
      <Tops onSelect={setSelectedTop} />
      <Bottoms onSelect={setSelectedBottom} />
      <Accessories onSelect={setSelectedAccessory} />
      <Outfit
        selectedTop={selectedTop}
        selectedBottom={selectedBottom}
        selectedAccessory={selectedAccessory}
      />
      <Footer />
    </div>
  );
};
