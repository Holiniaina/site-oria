import "../FilialeHCM/FilialeHCM.css";
import { Button } from "../ui/button";

import entretien from "../../assets/images/ENTRETIEN_DES_BIENS.png";
import gestion from "../../assets/images/GESTION_IMMOBILIERE.png";
import valorisation from "../../assets/images/VALORISATION_DES_BIENS.png";
import logo_sci from "../../assets/logo/Logo_SCI_result.webp";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function FilialeSCI() {
  const {t} = useTranslation();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Pour un défilement fluide
    });
  };

  return (
    <section className="bg-slate-50 py-20">
      <div className="container mx-auto px-4 md:px-32">
        {/* Section title */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">SCI DM</h2>
          <div className="flex flex-col md:flex-row justify-between">
            <p className="my-2 text-[15px] md:w-2/3 text-gray-400">
              {t('carouselSCIDM')}
            </p>
            <Link to="/projects" onClick={scrollToTop}>
              <Button className="inline-block backdrop-grayscale-0 w-40 bg-[#868686] hover:bg-oriathemeBlack transition duration-300">
                {t('ourproject')}
              </Button>
            </Link>
          </div>
        </div>
        {/* Cards section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}

          <div className="bg-white text-center p-6 border rounded-sm">
            <div className="flex justify-center items-center mb-4">
              {/* Replace the icon here */}
              <img src={gestion} alt="Réseaux Icon" className="h-28 w-28" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              {t('RealEstateManagement')}
            </h3>
          </div>

          {/* Card 2 */}
          <div className="bg-white text-center p-6 border rounded-sm ">
            <div className="flex justify-center items-center mb-4">
              {/* Replace the icon here */}
              <img
                src={entretien}
                alt="Bâtiments Icon"
                className="h-28 w-28 border-solid"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              {t('property')}
            </h3>
          </div>

          {/* Card 3 */}
          <div className="bg-white text-center p-6 border rounded-sm">
            <div className="flex justify-center items-center mb-4">
              {/* Replace the icon here */}
              <img
                src={valorisation}
                alt="Génie Civil Icon"
                className="h-28 w-28"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              {t('valuation')}
            </h3>
          </div>

          {/* Card 4 */}
          <div className="bg-[#a02828] flex items-center text-center text-white p-6 rounded-sm ">
            <p className="text-[13px]">
              {t('SCIDMAbout')}
            </p>
          </div>
        </div>

        {/* Footer section */}
        <div className="p-4 mt-12 rounded-sm flex flex-col md:flex-row items-center justify-between border">
          <p className="my-2 text-[15px] md:w-2/3 text-gray-500">
            {t('SCIDMcollab')}
          </p>
          <Link to="/contact" onClick={scrollToTop}>
            <Button className="bg-oriathemeBlack w-40">{t('collabbutton')}</Button>
          </Link>
        </div>
        <div className="logo w-full m-0">
          <img
            className="mx-auto mt-6 w-20 m-0 p-0"
            src={logo_sci}
            alt="Logo HCM"
          />
        </div>
      </div>
    </section>
  );
}
