import { Header } from "../components/header";
import { Head } from "../components/head";
import { Footer } from "../components/footer";
import { OutfitCard } from "../components/outfitcard";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export const Leaderboard = (props: any) => {
  const [datas, setData] = useState<any[]>([]);
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

    fetch("http://127.0.0.1:8000/view/", {
      method: "GET",
      headers: {
        Accept: "application.json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
    // empty dependency array means this effect will only run oncfe (like componentDidMount in classes)
  }, []);

  return (
    <div>
      <Head />
      <Header username={username} />
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
