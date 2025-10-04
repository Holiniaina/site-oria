import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "../ui/button";
import "./Hero.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { BlurhashCanvas } from "react-blurhash";
import { useTranslation } from "react-i18next";

function Hero() {

  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const blurHash = "L4HVO|+@00?;0G00yxDT00=}RR_L"; 
  const { t } = useTranslation();

  useEffect(() => {
    const img = new Image();
    img.src = "https://res.cloudinary.com/dknbojzhe/image/upload/v1757488681/DSC_8970_eeirl6.webp";
    img.onload = () => setIsImageLoaded(true);
  }, []);


  return (
    <div
      className="relative h-100% flex justify-center items-center mt-16"
      id="hero"
      style={{
        background: isImageLoaded
          ? `url(${'https://res.cloudinary.com/dknbojzhe/image/upload/v1757488681/DSC_8970_eeirl6.webp'}) center/cover no-repeat background-attachment:fixed background-position: bottom`: "",
      }}
    >
      {!isImageLoaded && (
        <BlurhashCanvas
          hash={blurHash}
          className="absolute inset-0 w-full rounded-md h-full"
        />
      )}
      <div className="layer"></div>
      <Carousel
        className="w-2/3 md:h-60"
       plugins={[
         Autoplay({
          delay: 6000,
        }),
       ]}
      >
        <CarouselContent className="text-white md:h-60 text-center">
          <CarouselItem className="flex flex-col items-center justify-around cursor-pointer">
            <h1 className="text-4xl lg:text-7xl tracking-wide">HCM</h1>
            <p className="md:w-2/3">
              {t('carouselHCM')}
            </p>
            <div className="flex h-24 flex-col items-center justify-around md:flex-row md:justify-evenly md:w-[70%] lg:w-[50%] ">
              <Link to="/contact">
                <Button className="w-40 bg-red-800 hover:bg-black">{t('contactUs')}</Button>
              </Link>
              <Link to="/projects">
                <Button variant="outline" className="text-black w-40">
                  {t('navproject')}
                </Button>
              </Link>
            </div>
          </CarouselItem>
          <CarouselItem className="flex flex-col items-center justify-around cursor-pointer">
            <h1 className="text-4xl lg:text-7xl tracking-wide">SCI DM</h1>
            <p className="md:w-2/3">
              {t('carouselSCIDM')}
            </p>
            <div className="flex h-24 flex-col items-center justify-around md:flex-row md:justify-evenly md:w-[70%] lg:w-[50%] ">
              <Link to="/contact">
                <Button className="w-40 bg-red-800 hover:bg-black">{t('contactUs')}</Button>
              </Link>
              <Link to="/projects">
                <Button variant="outline" className="text-black w-40">
                  {t('navproject')}
                </Button>
              </Link>
            </div>
          </CarouselItem>
          <CarouselItem className="flex flex-col items-center justify-around cursor-pointer">
            <h1 className="text-4xl lg:text-7xl tracking-wide">ORIA GROUPE</h1>
            <p className="md:w-2/3">
              {t('carouselORIA')}
            </p>
            <div className="flex h-24 flex-col items-center justify-around md:flex-row md:justify-evenly md:w-[70%] lg:w-[50%] ">
              <Link to="/contact">
                <Button className="w-40 bg-red-800 hover:bg-black">{t('contactUs')}</Button>
              </Link>
              <Link to="/projects">
                <Button variant="outline" className="text-black w-40">
                  {t('navproject')}
                </Button>
              </Link>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default Hero;
