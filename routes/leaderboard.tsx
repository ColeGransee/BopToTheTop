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
    // empty dependency array means this effect will only run oncfe (like componentDidMount in classes)
  }, []);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/view/", {
      method: "GET",
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
        {datas.map((user) => (
          <OutfitCard
            key={user[0]}
            title={user[0]}
            accessoryUrl={user[3]}
            topUrl={user[1]}
            bottomUrl={user[2]}
            upvotes={user[4]}
            enableVoting={true}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};
