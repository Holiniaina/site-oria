import "./Filiale.css";
import { BlurhashCanvas } from "react-blurhash";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function FilialeHero() {
  const {t} = useTranslation();
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const blurHash = "LMFr^p00?bM{_ND%Vrx]NfxtD%xu"; // lien BlurHash

  useEffect(() => {
    const img = new Image();
    img.src = "https://res.cloudinary.com/dknbojzhe/image/upload/v1757503269/filiale_bg_hero-DfCwsaht_y2s8qb_kzcxrs.webp";
    img.onload = () => setIsImageLoaded(true);
  }, []);


  return (
    <section className="filiale-hero w-full mt-16 h-[30vh] flex justify-center items-center flex-col relative"
      style={{
        background: isImageLoaded
          ? `url(${"https://res.cloudinary.com/dknbojzhe/image/upload/v1757503269/filiale_bg_hero-DfCwsaht_y2s8qb_kzcxrs.webp"}) center/cover no-repeat background-attachment: fixed background-position: bottom` : "",
      }}>
      {!isImageLoaded && (
        <BlurhashCanvas
          hash={blurHash}
          className="absolute inset-0 w-full rounded-md h-full"
        />
      )}
      <div className="filiale-layer"></div>
      <h3 className="reveal text-[#868686] text-xs">HCM | SCI DM</h3>
      <h1 className="reveal-delay reveal text-3xl md:text-5xl text-white">
      {t('navsubsidiaries')}
      </h1>
    </section>
  );
}

export default FilialeHero;
