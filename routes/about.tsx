import { Header } from "../components/header";
import { About } from "../components/about";
import { Head } from "../components/head";
import { Footer } from "../components/footer";
import { useEffect, useState } from "react";

export const AboutPage = () => {
  const [username, setUsername] = useState<string>();

  useEffect(() => {
    // Perform localStorage action
    if (localStorage.getItem("userID") && localStorage.getItem("username")) {
      // @ts-ignore
      setUsername(localStorage.getItem("username"));
    }
    // empty dependency array means this effect will only run oncfe (like componentDidMount in classes)
  }, []);
  return (
    <div>
      <Head />
      <Header username={username} />
      <About />
      <Footer />
    </div>
  );
};
