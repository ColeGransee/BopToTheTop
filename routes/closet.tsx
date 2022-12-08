import { Header } from "../components/header";
import { Head } from "../components/head";
import { Footer } from "../components/footer";
import { useEffect, useRef, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { OutfitCard } from "../components/outfitcard";

export const Closet = () => {
  const [userID, setUserID] = useState<string>();
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [email, setEmail] = useState<string>();

  const [filteredData, setFilteredData] = useState<any[]>([]);

  let result = [];
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
    // Perform localStorage action
    if (localStorage.getItem("userID") && localStorage.getItem("username")) {
      // @ts-ignore
      setUserID(localStorage.getItem("userID"));
      // @ts-ignore
      setUsername(localStorage.getItem("username"));
      // @ts-ignore
      setEmail(localStorage.getItem("email"));
      // @ts-ignore
      setPassword(localStorage.getItem("password"));
    }
    // empty dependency array means this effect will only run oncfe (like componentDidMount in classes)
  }, []);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/view/", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        result = data.filter((user: any) => {
          return user[0] === username;
        });
        setFilteredData(result);
      });
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, [filteredData]);

  return (
    <div>
      <Head />
      <Header username={username} />
      <div className="bg-blue-100 p-4 md:px-8 pb-8 border-b-2 border-double border-gray-600">
        <div className="p-4 font-serif font-bold text-2xl md:text-3xl  text-gray-900">
          Your Profile
        </div>
        <div className="flex flex-col p-2 px-6 font-serif text-lg md:text-xl text-gray-900">
          <div className="p-2 my-2 flex flex-wrap">
            <div className="font-bold px-2"> Email:</div>
            <div className=""> {email}</div>
          </div>
          <div className="p-2 my-2 flex flex-wrap">
            <div className="font-bold px-2"> Username:</div>
            <div className=""> {username}</div>
          </div>
          <div className="p-2 my-2 flex flex-wrap">
            <div className="font-bold px-2"> Password:</div>
            <div className=""> {password}</div>
          </div>
        </div>
      </div>
      <div className="bg-pink-100 p-4 md:px-8 pb-8 border-b-2 border-double border-gray-600">
        <div className="p-4 font-serif font-bold text-2xl md:text-3xl text-gray-900 overflow-x-auto">
          Your fits
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
            {filteredData.map((user) => (
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
