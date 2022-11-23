import { Card } from "./card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect, useState } from "react";

export const Accessories = (props: any) => {
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

  const [datas, setData] = useState<any[]>([]);
  useEffect(() => {
    // running after all the loading has done.
    // GET request using fetch inside useEffect React hook
    fetch("http://127.0.0.1:8000/products/?category=Hats&q=summer") // Pants, Jeans, Tops, Hats
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);

  return (
    <div className="bg-blue-100 p-4 md:px-8 pb-8 border-b-2 border-double border-gray-600">
      <div className="p-4 pl-14 font-serif font-bold text-3xl text-gray-900">
        Accessories
      </div>
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
        {datas.slice(0, 10).map((user) => (
          <Card
            key={user.Url}
            title={user?.Name}
            imageUrl={
              "https://m.media-amazon.com/images/G/01/Shopbop/p" + user?.Image
            }
            category={{ name: user?.Price, href: "#" }}
            description={user?.Brand}
            onSelect={props.onSelect}
          />
        ))}
      </Carousel>
    </div>
  );
};
