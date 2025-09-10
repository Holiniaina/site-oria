import "./Contact.css";
import { BlurhashCanvas } from "react-blurhash";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function ContactHero() {
  const { t } = useTranslation();
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const blurHash = "LgGu?zWXMxNG_NIps9xZ-=Rkn$ay"; // lien BlurHash

  useEffect(() => {
    const img = new Image();
    img.src = "https://res.cloudinary.com/doqmy6uc2/image/upload/v1744698045/illustration-construction-site-Y83nW9X2_hzhknc.webp";
    img.onload = () => setIsImageLoaded(true);
  }, []);


  return (
    <section className="contact-hero w-full mt-16 h-[30vh] flex justify-center items-center flex-col relative"
      style={{
        background: isImageLoaded
          ? `url(${"https://res.cloudinary.com/doqmy6uc2/image/upload/v1744698045/illustration-construction-site-Y83nW9X2_hzhknc.webp"}) center/cover no-repeat background-attachment: fixed background-position: bottom` : "",
      }}>
      {!isImageLoaded && (
        <BlurhashCanvas
          hash={blurHash}
          className="absolute inset-0 w-full rounded-md h-full"
        />
      )}
      <div className="contact-layer"></div>
      <h3 className="reveal text-[#868686] text-xs">
        {t('here')}
        
      </h3>
      <h1 className="reveal reveal-delay text-3xl md:text-5xl text-white">
      {t('contactUs')}
      </h1>
    </section>
  );
}

export default ContactHero;
