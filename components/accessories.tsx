import { Card } from "./card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Accessories = () => {
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
    <div className="bg-blue-100 p-4 md:px-8 pb-8">
      <div className="p-4 pl-14 font-serif font-bold text-3xl text-gray-900">
        Accessories
      </div>
      <Carousel
        swipeable={false}
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
            title="Freya"
            imageUrl="./Freya.jpg"
            category={{ name: "$225.00", href: "#" }}
            description="Gardenia Straw Hat"
          />
        </div>
        <div>
          <Card
            title="Sydney Evan"
            imageUrl="./Sydney.jpg"
            category={{ name: "$355.00", href: "#" }}
            description="14k Gold Tiny Script Love Necklace"
          />
        </div>
        <div>
          <Card
            title="Gucci"
            imageUrl="./Gucci.jpg"
            category={{ name: "$520.50", href: "#" }}
            description="Fork Square Sunglasses"
          />
        </div>
        <div>
          <Card
            title="Lele Sadoughi"
            imageUrl="./Lele.jpg"
            category={{ name: "$175.00", href: "#" }}
            description="Multi Pearl Tweed Knotted Headband  "
          />
        </div>
        <div>
          <Card
            title="Lizzie Fortunato"
            imageUrl="./Lizzie.jpg"
            category={{ name: "$240.00", href: "#" }}
            description="Wide Georgia Belt in Tan "
          />
        </div>
      </Carousel>
    </div>
  );
};
