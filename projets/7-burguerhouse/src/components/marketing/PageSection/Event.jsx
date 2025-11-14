import React from "react";
import Container from "../../elements/Container";
import AliceCarousel from "react-alice-carousel";
import "../../../css/carousel.css";
import Heading from "../../DisplayTitles/Heading";

import Img1 from "../../../medias/images/Events/event-1.jpg";

const Slide = (props) => {
  const { image, category, title, alignement, className, children } = props;

  let align = "";
  switch (alignement) {
    case "center":
      align = "items-center";
      break;
    case "right":
      align = "items-end";
      break;
    default:
      align = "items-start";
      break;
  }
  return (
    <div className="grid grid-cols-2 h-96">
      <div
        className={`flex flex-col p-10 ${align} ${className} ${
          align === "items-end"
            ? "text-right"
            : align === "items-center"
            ? "text-center"
            : "text-left"
        }`}
      >
        <Heading variant="h4">{category}</Heading>
        <Heading theme="secondary" variant="h3">
          {title}
        </Heading>
        <div className="tracking-wide text-lg leading-relaxed font-light text-gray-800">
          {children}
        </div>
      </div>

      <div className="p-5 overflow-hidden">
        <div className="bg-primary rounded-lg">
          <img
            src={image}
            alt="image de l'événément"
            className="w-full h-80 object-cover object-bottom"
          />
        </div>
      </div>
    </div>
  );
};

export default function Event() {
  const items = [
    <Slide
      image={Img1}
      category="Evénements à venir"
      title="Vivez la demi-finale"
      alignement="left"
    >
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet nostrum
      sapiente esse non distinctio laudantium.
    </Slide>,
    <Slide
      image={Img1}
      category="Evénements à venir"
      title="Vivez la demi-finale"
      alignement="left"
    >
      Lorem ipsum dolor, sit amet consectetur adip isicing elit. Amet nostrum
      sapiente esse non distinctio laudantium.
    </Slide>,
  ];
  return (
    <Container>
      <div className="shadow-xl mb-20 h-96">
        <AliceCarousel mouseTracking items={items} />
      </div>
    </Container>
  );
}
