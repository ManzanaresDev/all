import React from "react";
import Container from "../../elements/Container";
import ImageAssieteBurguerFrites from "../../../medias/images/background/Assiette-burger-frites.png";
import ImageSaucePimente from "../../../medias/images/background/Sauce-pimente.png";
import ImageBurger from "../../../medias/images/background/Burger.png";
import Heading from "../../DisplayTitles/Heading";

export default function Booking() {
  return (
    <Container>
      <div className="relative lg:m-20 h-[400px]">
        <img
          src={ImageBurger}
          alt="Image burger"
          className="hidden md:block absolute z-10 -top-20 -left-36"
        />
        <img
          src={ImageAssieteBurguerFrites}
          alt="Image assiette burger et frites"
          className="hidden lg:block absolute -bottom-52 -right-96"
        />
        <img
          src={ImageSaucePimente}
          alt="Image sauce pimentée"
          className="hidden lg:block absolute bottom-0 -left-7"
        />
        <div className="relative z-20 max-w-3xl mx-auto h-96 p-x-10  py-20">
          <Heading
            variant="h2"
            alignement="center"
            theme="secondary"
            className=""
          >
            Réservation
          </Heading>
          <Heading
            variant="h3"
            alignement="center"
            theme="secondary"
            className=""
          >
            Réservez votre table
          </Heading>
          <form
            action=""
            className="grid grid-cols-1 md:grid-cols-2 gap-x-7 gap-y-6 mt-20"
          >
            <div className="">
              <label
                htmlFor="name"
                className="block uppercase mb-2 tracking-widest text-sm text-gray-500 pl-1"
              >
                nom
              </label>
              <input
                type="text"
                className="focus:outline-none focus:ring-2 focus:ring-primary block w-full border-gray-500 rounded p-1 md:p-5 tracking-wide text-base md:text-3xl"
                id="name"
                autoComplete="off"
                placeholder="Doe"
              />
            </div>
            <div className="">
              <label
                htmlFor="name"
                className="block uppercase mb-2 tracking-widest text-sm text-gray-500 pl-1"
              >
                Email
              </label>
              <input
                type="email"
                className="focus:outline-none focus:ring-2 focus:ring-primary block w-full border-gray-500 rounded p-1 md:p-5 tracking-wide text-base md:text-3xl"
                id="email"
                autoComplete="off"
                placeholder="John.Doe@example.fr"
              />
            </div>
            <div className="">
              <label
                htmlFor="name"
                className="block uppercase mb-2 tracking-widest text-sm text-gray-500 pl-1"
              >
                Date
              </label>
              <input
                type="date"
                className="focus:outline-none focus:ring-2 focus:ring-primary border rounded w-full  p-1 md:p-5 tracking-wide text-base md:text-3xl"
                id="date"
              />
            </div>
            <div className="">
              <label
                htmlFor="customs"
                className="block uppercase mb-2 tracking-widest text-sm text-gray-500 pl-1"
              >
                Nombre de personnes
              </label>
              <input
                type="number"
                id="customs"
                min="1"
                step="1"
                className="focus:outline-none focus:ring-2 focus:ring-primaryborder rounded p-1 md:p-5 tracking-wide text-base md:text-3xl w-full"
                placeholder="1"
                onKeyDown={(e) => {
                  // Autorise les flèches, Tab mais bloque le reste
                  const allowedKeys = ["ArrowUp", "ArrowDown", "Tab"];

                  // Si la touche n'est pas autorisée → empêcher la saisie
                  if (!allowedKeys.includes(e.key)) {
                    e.preventDefault();
                  }
                }}
              />
            </div>

            <div className="">
              <label
                htmlFor="time"
                className="block uppercase mb-2 tracking-widest text-sm text-gray-500 pl-1"
              >
                Time
              </label>
              <input
                type="time"
                className="focus:outline-none focus:ring-2 focus:ring-primary border rounded  p-1 md:p-5 tracking-wide text-base md:text-3xl"
                id="time"
              />
            </div>
            <div className="">
              <label htmlFor="sendBooking" className="invisible">
                Réservez votre repas
              </label>
              <input
                type="button"
                name="sendBooking"
                id="sendBooking"
                value="Réservez votre repas"
                className="bg-red-primary hover:bg-red-primary-hover w-full text-secondary font-secondary text-xl tracking-widest uppercase py-4 mt-1 cursor-pointer rounded-md animate"
              />
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
}
