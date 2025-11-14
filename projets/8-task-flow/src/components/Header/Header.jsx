import React from "react";
import style from "./Header.module.css";
import ReactLogo from "../../assets/react.svg";

// Ce composant est utilisé pour afficher l'en-tête de notre application

const Header = () => {
  return (
    <div className={style.container}>
      <div className={style.titleContainer}>
        <img src={ReactLogo} alt="logo React" className="" />
        <div className="">
          <h1>Task Flow</h1>
          <div className="color-gray">
            <code className="">Eliminez le chaos, suivez le flux</code>
          </div>
        </div>
      </div>
      <code className="color-primary">V1.0</code>
    </div>
  );
};

export default Header;
