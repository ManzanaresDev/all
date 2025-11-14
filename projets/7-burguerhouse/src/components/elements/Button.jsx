import React from "react";

export default function Button({ className = "", color, theme, children }) {
  let styleButtonColor = "";
  switch (color) {
    case "primary":
      styleButtonColor = "primary";
      break;
    case "secondary":
      styleButtonColor = "secondary";
      break;
    default:
      styleButtonColor = "default";
  }

  let styleButtonSize = "";
  switch (theme) {
    case "big":
      styleButtonSize = "big";
      break;
    case "small":
      styleButtonSize = "small";
      break;
    default:
      styleButtonSize = "p-5 md:medium";
  }

  return (
    <button
      className={`uppercase shadow-xl text-white bouton_transition ${styleButtonColor} ${styleButtonSize} ${className}`}
    >
      {children || "bouton"}
    </button>
  );
}
