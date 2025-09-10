import batiments from "../../assets/images/BATIMENTS.png";
import genie from "../../assets/images/GENIE_CIVIL.png";
import reseau from "../../assets/images/réseaux.png";
import { Button } from "../ui/button";
import "./FilialeHCM.css";
import { Link } from "react-router-dom";
import logo_hcm from "../../assets/logo/Logo_HCM_result.webp";
import { useTranslation } from "react-i18next";

export default function FilialeHCM() {
  const { t } = useTranslation();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 md:px-32">
        <div className="mb-8">
          <h3 className="text-[#a02828] text-[12px] font-semibold uppercase flex items-center">
            <span className="inline-block w-2 h-2 bg-[#868686] mr-2"></span>
            {t("titleentitie")}
          </h3>
          <h2 className="text-3xl font-bold text-gray-900">HCM</h2>
          <div className="flex flex-col md:flex-row justify-between">
            <p className="my-2 text-[15px] md:w-2/3 text-gray-400">
              {t("carouselHCM")}
            </p>
            <Link to="/projects" onClick={scrollToTop}>
              <Button className="inline-block backdrop-grayscale-0 w-40 bg-[#868686] hover:bg-[#868686] Black transition duration-300">
                {t("ourproject")}
              </Button>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#a02828] flex items-center text-center text-white p-6 rounded-sm">
            <p className="text-[13px]">{t("HCMabout")}</p>
          </div>
          <div className="bg-white text-center p-6 border rounded-sm">
            <div className="flex justify-center items-center mb-4">
              <img
                src={batiments}
                alt="Icône Bâtiments"
                className="h-28 w-28 border-solid"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              {" "}
              {t("building")}{" "}
            </h3>
          </div>
          <div className="bg-white text-center p-6 border rounded-sm">
            <div className="flex justify-center items-center mb-4">
              <img src={genie} alt="Icône Génie Civil" className="h-28 w-28" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              {t("CivilEngineering")}
            </h3>
          </div>

          <div className="bg-white text-center p-6 border rounded-sm">
            <div className="flex justify-center items-center mb-4">
              <img src={reseau} alt="Icône Réseaux" className="h-28 w-28" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              {t("network")}
            </h3>
          </div>
        </div>

        <div className="p-4 mt-12 rounded-sm flex flex-col md:flex-row items-center justify-between border">
          <p className="my-2 text-[15px] md:w-2/3 text-gray-500">
            {t("HCMcollab")}
          </p>
          <Link to="/contact" onClick={scrollToTop}>
            <Button className="bg-[#000000] Black w-40">{t('collabbutton')}</Button>
          </Link>
        </div>
        <div className="logo w-full p-4">
          <img className="mx-auto w-40 " src={logo_hcm} alt="Logo HCM" />
        </div>
      </div>
    </section>
  );
}
