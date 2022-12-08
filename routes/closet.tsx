import { Header } from "../components/header";
import { Head } from "../components/head";
import { Footer } from "../components/footer";
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { OutfitCard } from "../components/outfitcard";

export const Closet = () => {
  const [userID, setUserID] = useState<string>();
  const [username, setUsername] = useState<string>();
  const [datas, setData] = useState<any[]>([]);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  useEffect(() => {
    fetch("http://127.0.0.1:8000/view/", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        data.filter(function (user: any) {
          return user[0] === username;
        });
        setData(data);
      });
    // empty dependency array means this effect will only run oncfe (like componentDidMount in classes)
  }, []);

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

  return (
    <div>
      <Head />
      <Header username={username} />
      <div className="bg-blue-100 p-4 md:px-8 pb-8 border-b-2 border-double border-gray-600">
        <div className="p-4 font-serif font-bold text-3xl text-gray-900">
          Your Profile
        </div>
        <div className="flex flex-col p-4 font-serif font-bold text-xl text-gray-700">
          <div className="">Username</div>
          <div className="">Password</div>
          <div className="">Email</div>
        </div>
      </div>
      <div className="bg-pink-100 p-4 md:px-8 pb-8 border-b-2 border-double border-gray-600">
        <div className="p-4 font-serif font-bold text-3xl text-gray-900">
          {username}'s fits
        </div>
        <div className="">
          <Carousel
            swipeable={true}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {datas.map((user) => (
              <OutfitCard
                key={user[2]}
                title={user[0]}
                accessoryUrl={user[3]}
                topUrl={user[1]}
                bottomUrl={user[2]}
                upvotes={user[4]}
                enableVoting={false}
              />
            ))}
          </Carousel>
        </div>
      </div>
      <Footer />
    </div>
  );
};
