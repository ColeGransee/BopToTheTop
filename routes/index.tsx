import { Header } from "../components/header";
import { Head } from "../components/head";
import { Footer } from "../components/footer";
import "react-multi-carousel/lib/styles.css";
import { Tops } from "../components/tops";

export const IndexPage = () => {
  return (
    <div>
      <Head />
      <Header />
      <Tops />
      <Footer />
    </div>
  );
};
