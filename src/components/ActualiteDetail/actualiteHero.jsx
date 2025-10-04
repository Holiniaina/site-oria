import { useEffect, useState } from "react";
import "./actualite.css";

import { BlurhashCanvas } from "react-blurhash";
import { useTranslation } from "react-i18next";

function ActualiteHero() {
  const {t} = useTranslation()
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const blurHash = "LGI;U-~pD*^hD+slIpxZR*RkRkt6";

  useEffect(() => {
    const img = new Image();
    img.src = "https://res.cloudinary.com/dknbojzhe/image/upload/v1757503268/bg_apropos_hero-CPJW0pdy_poza8n_kjgqja.webp";
    img.onload = () => setIsImageLoaded(true);
  }, []);


  return (
    <section className="about-hero w-full mt-16 h-[30vh] flex justify-center items-center flex-col relative"
      style={{
        background: isImageLoaded
          ? `url(${"https://res.cloudinary.com/dknbojzhe/image/upload/v1757503268/bg_apropos_hero-CPJW0pdy_poza8n_kjgqja.webp"}) center/cover no-repeat background-attachment: fixed background-position: bottom` : "",
      }}>
      {!isImageLoaded && (
        <BlurhashCanvas
          hash={blurHash}
          className="absolute inset-0 w-full rounded-md h-full"
        />
      )}
      <div className="about-layer"></div>
      <h3 className="reveal text-[#868686] text-xs">HCM | SCI DM</h3>
      <h1 className="reveal reveal-delay text-5xl text-white">{t('news')}</h1>
    </section>
  );
}

export default ActualiteHero;
