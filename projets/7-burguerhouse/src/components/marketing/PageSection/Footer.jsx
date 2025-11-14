import React from "react";
import Container from "../../elements/Container";
import ImageFooter from "../../../medias/images/background/bg-footer.jpg";
import { MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import LogoBurguerHouseWhite from "../../../medias/svg/Logo-burger-house-white.svg";

export default function Footer() {
  return (
    <Container>
      <div className="mt-20 p-5 relative text-white">
        <img
          src={ImageFooter}
          alt="un plan de travail de cuisine avec un menu: burger, mayonnaise et ketchup"
          className="absolute top-0 left-0 object-cover object-center h-full w-full z-0"
        />

        {/* Section principale */}
        <div className="relative z-10 grid grid-rows-2 md:grid-cols-2">
          {/* Colonne gauche */}
          <div className="w-full mt-20 mb-10 md:mb-28 p-5">
            <img
              src={LogoBurguerHouseWhite}
              alt="logo burger-house white"
              className="w-2/3"
            />
            <p className="mt-10 mb-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              vel voluptates impedit porro, consequuntur unde odio ex accusamus,
              ratione dolorum consequatur consectetur perspiciatis itaque
              quidem. Ab voluptates consequuntur distinctio saepe officia
              molestias.
            </p>
          </div>

          {/* Colonne droite */}
          <div className="w-full flex flex-col justify-start md:justify-center">
            <div className="flex items-center justify-center mb-5">
              <div className="w-[80px] flex justify-center">
                <MapPinIcon className="w-[60px] h-[60px] text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tighter text-white uppercase">
                4 rue du parc, Malo-les-bains dunkerque
              </span>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-[80px] flex justify-center">
                <EnvelopeIcon className="w-[60px] h-[60px] text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tighter text-white uppercase">
                Local@entreprise.com
              </span>
            </div>
          </div>
        </div>

        {/* Bas du footer */}
        <div className="relative z-10 flex items-center justify-between p-4">
          <div className="uppercase font-extrabold tracking-tighter text-sm">
            CopyRight Burguer House 2025 — All rights reserved
          </div>

          <div className="flex gap-4">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-red-primary-hover transition-all duration-300 cursor-pointer">
              <i className="fab fa-facebook-f text-red-primary text-2xl"></i>
            </div>
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-red-primary-hover transition-all duration-300 cursor-pointer">
              <i className="fab fa-instagram text-red-primary text-2xl"></i>
            </div>
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-red-primary-hover transition-all duration-300 cursor-pointer">
              <i className="fab fa-twitter text-red-primary text-2xl"></i>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
