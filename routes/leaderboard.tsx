import { Header } from "../components/header";
import { Head } from "../components/head";
import { Footer } from "../components/footer";
import { OutfitCard } from "../components/outfitcard";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export const Leaderboard = (props:any) => {
  const router = useRouter();
  const [datas, setData] = useState<any[]>([]);
  const username = "fixme";
  console.log(router.query);
  // useEffect(() => {
  //   // running after all the loading has done.
  //   // GET request using fetch inside useEffect React hook
  //   fetch("http://127.0.0.1:8000/view/", {
  //     method: "GET",
  //     headers: {
  //       Accept: 'application.json',
  //       'Content-Type': 'application/json'
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setData(data);
  //     });
  //   // empty dependency array means this effect will only run oncfe (like componentDidMount in classes)
  // }, []);

  return (
    <div>
      <Head />
      <Header username={username}/>
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
