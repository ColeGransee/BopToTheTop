import { Card } from "./card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect, useState } from "react";

export const Tops = (props: any) => {
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
    // Pants, Jeans, Tops, Hats
    fetch("http://127.0.0.1:8000/products/?category=Hats&q=summer")
      .then((response) => response.json())
      .then((data) => {
        setData(data);

        for (let i = 0; i < 40; i++) {
          console.log(data[i]);
        }
      });
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);

  return (
    <div className="bg-pink-100 p-4 md:px-8 pb-8 border-b-2 border-double border-gray-600">
      <div>
        {/* <div>{JSON.stringify(datas)}</div> */}
        {/* <div>{JSON.stringify()}</div> */}
      </div>
      <div className="p-4 pl-14 font-serif font-bold text-3xl text-gray-900">
        Tops
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
          <Card
            title={datas[0]?.Name.toString()}
            imageUrl={datas[0]?.Image.toString()}
            category={{ name: datas[0]?.Price.toString(), href: "#" }}
            description={datas[0]?.Brand.toString()}
            onSelect={props.onSelect}
          />
          <Card
            title="Velvet"
            imageUrl="./velvet.jpg"
            category={{ name: "$158.00", href: "#" }}
            description="Ray Sweater"
            onSelect={props.onSelect}
          />
          <Card
            title="For Love & Lemons"
            imageUrl="./forlove.jpg"
            category={{ name: "$175.50", href: "#" }}
            description="Vera Cropped Cutout Sweater"
            onSelect={props.onSelect}
          />
          <Card
            title="Pistola Denim"
            imageUrl="./pistola.jpg"
            category={{ name: "$158.00", href: "#" }}
            description="Drea Sweater"
            onSelect={props.onSelect}
          />
          <Card
            title="LINE"
            imageUrl="./LINE.jpg"
            category={{ name: "$199.00", href: "#" }}
            description="Freya Cropped Turtleneck"
            onSelect={props.onSelect}
          />
        </Carousel>
      </div>
    </div>
  );
};
