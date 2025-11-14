import Container from "../../elements/Container";
import Ilustration from "../../../medias/images/background/bg-food.jpg";
import Product from "../../../medias/images/HeroTop/burger-hero-top.png";
import Header from "../PageSection/Header";
import Button from "../../elements/Button";

export default function HeroTop() {
  return (
    <div className="bg-primary w-full">
      <div
        className="bg-repeat w-full h-full  pb-20 md:pb-40"
        style={{
          backgroundImage: `url(${Ilustration})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Container>
          <Header />
          <div className="w-full relative mt-10 md:mt-28 text-center md:text-left">
            <img
              src={Product}
              className="hidden lg:block absolute z-0 lg:-top-64 right-0 w-[575S]"
              alt="Burguer avec des frites et boisson CocaCola"
            />
            <div className="hidden lg:block absolute z-10 top-40 right-80 w-40 h-40 bg-red-primary rounded-full p-3">
              <div className="w-full h-full rounded-full border-dashed border-2 border-white  flex justify-center items-center">
                <div className="text-white">
                  <span className="block font-extrabold">
                    <span className="text-5xl">5</span>.49€
                  </span>
                  <span className="tracking-widest uppercase text-sm">
                    seulement
                  </span>
                </div>
              </div>
            </div>
            <div className="relative z-10 text-secondary text-xl uppercase">
              <h1 className="mb-4 font-semibold">
                C'est de moment de goûter au bon goût des hamburgers
              </h1>
              <h2 className="font-secondary shadowTitleSecondary">
                <span className="text-2xl md:text-6xl lg:text-8xl block">
                  Burger
                </span>
                <span className="text-xl md:text-4xl lg:text-6xl">House</span>
                <span className="md:text-3xl ml-0 md:ml-3 block md:inline">
                  click<span className="text-red-primary">&</span>Collect
                </span>
              </h2>
            </div>
          </div>
          <div className="mt-6">
            <Button color="secondary" className="w-60">
              Créer mon compte
            </Button>
          </div>
        </Container>
      </div>
    </div>
  );
}
