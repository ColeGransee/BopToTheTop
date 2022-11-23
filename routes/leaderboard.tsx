import { Header } from "../components/header";
import { Head } from "../components/head";
import { Footer } from "../components/footer";
import { OutfitCard } from "../components/outfitcard";

export const Leaderboard = () => {
  return (
    <div>
      <Head />
      <Header />
      <div className="bg-offwhite grid md:grid-cols-2 lg:grid-cols-3 p-10">
        <OutfitCard
          title="Allison's fit"
          accessoryUrl="./Gucci.jpg"
          topUrl="./sweater.jpg"
          bottomUrl="./agolde.jpg"
          category={{ name: "$239.00", href: "#" }}
          description="High Rise Wide Leg Jeans"
        />
        <OutfitCard
          title="Allison's fit"
          accessoryUrl="./Gucci.jpg"
          topUrl="./sweater.jpg"
          bottomUrl="./agolde.jpg"
          category={{ name: "$239.00", href: "#" }}
          description="High Rise Wide Leg Jeans"
        />
        <OutfitCard
          title="Allison's fit"
          accessoryUrl="./Gucci.jpg"
          topUrl="./sweater.jpg"
          bottomUrl="./agolde.jpg"
          category={{ name: "$239.00", href: "#" }}
          description="High Rise Wide Leg Jeans"
        />
        <OutfitCard
          title="Allison's fit"
          accessoryUrl="./Gucci.jpg"
          topUrl="./sweater.jpg"
          bottomUrl="./agolde.jpg"
          category={{ name: "$239.00", href: "#" }}
          description="High Rise Wide Leg Jeans"
        />
      </div>
      <Footer />
    </div>
  );
};
