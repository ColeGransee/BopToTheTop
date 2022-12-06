import { Header } from "../components/header";
import { Head } from "../components/head";
import { Footer } from "../components/footer";
import "react-multi-carousel/lib/styles.css";
import { Tops } from "../components/tops";
import { Bottoms } from "../components/bottoms";
import { Accessories } from "../components/accessories";
import { Hero } from "../components/hero";
import { Outfit } from "../components/outfit";
import { useState, useEffect } from "react";
import { Prompt } from "../components/prompt";

export const IndexPage = () => {
  const [selectedTop, setSelectedTop] = useState<string>();
  const [selectedBottom, setSelectedBottom] = useState<string>();
  const [selectedAccessory, setSelectedAccessory] = useState<string>();
  const [userID, setUserID] = useState<string>();
  const [username, setUsername] = useState<string>();

  useEffect(() => {
    // Perform localStorage action
    if (localStorage.getItem("userID") && localStorage.getItem("username")) {
      // @ts-ignore
      setUserID(localStorage.getItem("userID"));
      // @ts-ignore
      setUsername(localStorage.getItem("username"));
    }
  }, []);

  return (
    <div>
      <Head />
      <Header username={username} />
      <Prompt />
      <Hero />
      <Tops onSelect={setSelectedTop} />
      <Bottoms onSelect={setSelectedBottom} />
      <Accessories onSelect={setSelectedAccessory} />
      <Outfit
        selectedTop={selectedTop}
        selectedBottom={selectedBottom}
        selectedAccessory={selectedAccessory}
        username={username}
      />
      <Footer />
    </div>
  );
};
