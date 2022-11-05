import { Card } from "./card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
  return (
    <div className="bg-pink-100 p-4 md:px-8 pb-8 border-b-2 border-double border-gray-600">
      <div className="p-4 pl-14 font-serif font-bold text-3xl text-gray-900">
        Tops
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
        <div>
          <Card
            title="Apres Ski Fair Isle Turtleneck Sweater"
            imageUrl="./sweater.jpg"
            category={{ name: "$250.00", href: "#" }}
            description="Alex Mill"
            onSelect={props.onSelect}
          />
        </div>
        <div>
          <Card
            title="Velvet"
            imageUrl="./velvet.jpg"
            category={{ name: "$158.00", href: "#" }}
            description="Ray Sweater"
            onSelect={props.onSelect}
          />
        </div>
        <div>
          <Card
            title="For Love & Lemons"
            imageUrl="./forlove.jpg"
            category={{ name: "$175.50", href: "#" }}
            description="Vera Cropped Cutout Sweater"
            onSelect={props.onSelect}
          />
        </div>
        <div>
          <Card
            title="Pistola Denim"
            imageUrl="./pistola.jpg"
            category={{ name: "$158.00", href: "#" }}
            description="Drea Sweater"
            onSelect={props.onSelect}
          />
        </div>
        <div>
          <Card
            title="LINE"
            imageUrl="./LINE.jpg"
            category={{ name: "$199.00", href: "#" }}
            description="Freya Cropped Turtleneck"
            onSelect={props.onSelect}
          />
        </div>
      </Carousel>
    </div>
  );
};
