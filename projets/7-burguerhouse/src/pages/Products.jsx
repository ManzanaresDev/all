import React from "react";
import Container from "../components/elements/Container";
import HeadingTitle from "../components/DisplayTitles/HeadingTitle";
import Heading from "../components/DisplayTitles/Heading";
import ProductContainer from "../components/elements/ProductContainer";

import Product1 from "../medias/images/products/Product-1.jpg";
import Product2 from "../medias/images/products/Product-2.jpg";
import Product3 from "../medias/images/products/Product-3.jpg";

import Button from "../components/elements/Button";

export default function Products() {
  return (
    <Container>
      <HeadingTitle variant="h2">Toujours des delicieux burgers</HeadingTitle>
      <Heading variant="h3">Choisisez, savourez...</Heading>
      <p className="text-center">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut molestias
        deleniti suscipit repudiandae, recusandae eaque consequatur officia quo
        nobis placeat quaerat delectus praesentium mollitia, fugiat quidem
        nulla, incidunt nam aperiam similique unde!
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-1 mt-10 mb-10">
        <div className="w-full h-full flex flex-col justify-center items-center px-4">
          <div className="bg-primary relative w-full md:w-1/2 lg:w-full h-60  mb-4 overflow-hidden rounded">
            <img
              src={Product1}
              alt="hamburger1"
              className="absolute w-full h-full top-0 right-0 object-cover object-center"
            />
          </div>
          <Heading variant="h3">Lorem ipsum dolor sit</Heading>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
            vel.
          </p>
          <Button color="secondary"></Button>
        </div>

        <div className="w-full h-full flex flex-col justify-center items-center px-4">
          <div className="bg-primary relative w-full md:w-1/2 lg:w-full h-60  mb-4 overflow-hidden rounded">
            <img
              src={Product2}
              alt="hamburger1"
              className="absolute w-full h-full top-0 right-0 object-cover object-center"
            />
          </div>
          <Heading variant="h3">Lorem ipsum dolor sit</Heading>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
            vel.
          </p>
          <Button color="secondary"></Button>
        </div>

        <div className="w-full h-full flex flex-col justify-center items-center px-4">
          <div className="bg-primary relative w-full md:w-1/2 lg:w-full h-60  mb-4 overflow-hidden rounded">
            <img
              src={Product3}
              alt="hamburger1"
              className="absolute w-full h-full top-0 right-0 object-cover object-center"
            />
          </div>
          <Heading variant="h3">Lorem ipsum dolor sit</Heading>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
            vel.
          </p>
          <Button color="secondary"></Button>
        </div>
      </div>
    </Container>
  );
}
