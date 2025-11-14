import React from "react";
import Logo from "../../../medias/svg/Logo-burguer-house.svg";
import Icon from "../../../medias/svg/ico-bag-clickAndCollect.svg";
import Button from "../../elements/Button";
import PetitBurguer from "../../../medias/images/background/burguer.svg";

export default function Header() {
  return (
    <div className="relative z-10 flex items-center justify-between py-10">
      <div className="w-full">
        <img
          src={Logo}
          className="hidden md:block w-64"
          alt="Burguer House logo"
        />
        <img
          src={PetitBurguer}
          className="md:hidden w-10"
          alt="Burguer House logo"
        />
      </div>
      <div className="w-full text-secondary">
        <div className="hidden items-center justify-end md:flex">
          <img src={Icon} className="w-5 h-5 mr-2" alt="Bag icon" />
          <span>Commendez votre repas on ligne</span>
        </div>
        <div className="flex items-center justify-end md:mt-5">
          <Button className={"italic bg-primary px-5 py-3 uppercase mr-2"}>
            Inscription
          </Button>
          <Button className={"italic bg-primary px-5 py-3 uppercase"}>
            Connexion
          </Button>
        </div>
      </div>
    </div>
  );
}
