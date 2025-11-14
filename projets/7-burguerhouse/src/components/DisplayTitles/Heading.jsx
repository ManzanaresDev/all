import React from "react";

export default function Heading(props) {
  const { children, variant, alignement, theme, className } = props;

  const defaultClass = "my-5 uppercase font-secondary";

  let align = "";
  switch (alignement) {
    case "left":
      align = "text-left";
      break;
    case "right":
      align = "text-right";
      break;
    default:
      align = "text-center";
  }

  let fontColor = "";
  switch (theme) {
    case "primary":
      fontColor = "text-primary";
      break;
    case "secondary":
      fontColor = "text-secondary";
      break;
    default:
      fontColor = "black";
  }

  switch (variant) {
    case "h3":
      return (
        <h3
          className={`${defaultClass} ${align} text-5xl ${className} ${fontColor}`}
        >
          {children}
        </h3>
      );
    default:
      return (
        <h2
          className={`${
            theme === "secondary" ? "text-3xl lg:text-5xl" : "text-2xl"
          } ${defaultClass} ${align} ${className} ${fontColor}`}
        >
          {children}
        </h2>
      );
  }
}
