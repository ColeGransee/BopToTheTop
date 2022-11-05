import { Card } from "./card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Bottoms = (props: any) => {
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
    <div className="bg-white p-4 md:px-8 pb-8 border-b-2 border-double border-gray-600">
      <div className="p-4 pl-14 font-serif font-bold text-3xl text-gray-900">
        Bottoms
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
            title="AGOLDE"
            imageUrl="./agolde.jpg"
            category={{ name: "$178.00", href: "#" }}
            description="The 90's Pinch Waist Jeans"
            onSelect={props.onSelect}
          />
        </div>
        <div>
          <Card
            title="Triarchy"
            imageUrl="./triarchy.jpg"
            category={{ name: "$239.00", href: "#" }}
            description="High Rise Wide Leg Jeans"
            onSelect={props.onSelect}
          />
        </div>
        <div>
          <Card
            title="MOTHER"
            imageUrl="./MOTHER.jpg"
            category={{ name: "$228.50", href: "#" }}
            description="SNACKS! High Waist Double Stack Ankle Jeans"
            onSelect={props.onSelect}
          />
        </div>
        <div>
          <Card
            title="Sea"
            imageUrl="./Sea.jpg"
            category={{ name: "$295.00", href: "#" }}
            description="Mikaela Plaid Pleated Miniskirt"
            onSelect={props.onSelect}
          />
        </div>
        <div>
          <Card
            title="AG"
            imageUrl="./AG.jpg"
            category={{ name: "$225.00", href: "#" }}
            description="Saige Straight Jeans"
            onSelect={props.onSelect}
          />
        </div>
      </Carousel>
    </div>
  );
};
