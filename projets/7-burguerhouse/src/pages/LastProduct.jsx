import React from "react";
import Container from "../components/elements/Container";
import LastProduct1 from "../medias/images/products/LastProduct-1.jpg";
import LastProduct2 from "../medias/images/products/LastProduct-2.jpg";
import LastProduct3 from "../medias/images/products/LastProduct-3.jpg";

export default function LastProduct() {
  return (
    <Container>
      <div className="grid grid-rows-3 lg:grid-cols-2 lg:grid-rows-2 gap-2 lg:gap-5 lg:gap-y-3 w-full h-96 px-11 my-20 text-white">
        <div className="relative bg-primary-400 h-full lg:row-span-2 rounded-md  p-7">
          <img
            src={LastProduct1}
            className="rounded-md absolute top-0 left-0 object-cover w-full h-full z-0"
            alt="véritable hamburger servi sur une planche en bois"
          />
          <div className="relative z-10">
            <span className="block front-bold text-lg">Killer Burger</span>
            <span className="block font-black font-2xl">
              Burger le plus populair
            </span>
          </div>
        </div>
        <div className="relative bg-primary-500 h-full row-span-1 rounded-md  p-7">
          <img
            src={LastProduct2}
            className="rounded-md absolute top-0 left-0 object-cover w-full h-full z-0"
            alt="véritable hamburger servi sur une planche en bois"
          />

          <div className="relative z-10">
            <span className="block front-bold text-lg">Island Burger</span>
            <span className="block font-black font-2xl">Plus de plaisir</span>
            <span className="block font-black font-2xl">Plus de goût</span>
          </div>
        </div>
        <div className="relative bg-primary-600 h-full row-span-1 rounded-md  p-7">
          <img
            src={LastProduct3}
            className="rounded-md absolute top-0 left-0 object-cover w-full h-full z-0"
            alt="véritable hamburger servi sur une planche en bois"
          />
          <div className="relative z-10">
            <span className="block front-bold text-lg">Orlando Burger</span>
            <span className="block font-black font-2xl">Frais & Pimenté</span>
          </div>
          z-10
        </div>
      </div>
    </Container>
  );
}
