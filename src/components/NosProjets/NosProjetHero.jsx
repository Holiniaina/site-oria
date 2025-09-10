import "./NosProjet.css";
import { BlurhashCanvas } from "react-blurhash";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function NosProjetHero() {
  const {t} = useTranslation()
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const blurHash = "LfH^q;xZ9uWG~Dj]Rjt69$R-xZox"; // lien BlurHash

  useEffect(() => {
    const img = new Image();
    img.src = "https://res.cloudinary.com/doqmy6uc2/image/upload/v1744698037/bg_project-hero-DFTHV6NP_ktxwhq.webp";
    img.onload = () => setIsImageLoaded(true);
  }, []);


  return (
    <section className="nos-projet-hero w-full mt-16 h-[30vh] flex justify-center items-center flex-col relative"
      style={{
        background: isImageLoaded
          ? `url(${"https://res.cloudinary.com/doqmy6uc2/image/upload/v1744698037/bg_project-hero-DFTHV6NP_ktxwhq.webp"}) center/cover no-repeat background-attachment: fixed background-position: bottom` : "",
      }}>
      {!isImageLoaded && (
        <BlurhashCanvas
          hash={blurHash}
          className="absolute inset-0 w-full rounded-md h-full"
        />
      )}
      <div className="nos-projet-layer"></div>
      <h3 className="reveal text-[#868686] text-xs">HCM | SCI DM</h3>
      <h1 className="reveal-delay reveal text-3xl md:text-5xl text-white">
        {t('navproject')}
      </h1>
    </section>
  );
}

export default NosProjetHero;
