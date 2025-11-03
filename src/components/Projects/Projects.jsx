import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import "./Projects.css";
import { useTranslation } from "react-i18next";

function Projects() {
  const {t} = useTranslation();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };  

  return (
    <section className="bg-white py-20 ">
      <div className="container mx-auto px-4 md:px-32">
        {/* Section title */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-[#a02828] text-[12px] font-semibold uppercase flex items-center">
              <span className="inline-block w-2 h-2 bg-[#868686] mr-2"></span>
              {t("tolifeproject")}
            </h3>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{t("navproject")}</h2>
            <p className="mt-1 text-[13px] lg:w-2/3 text-gray-400">
              {t("projectabout")}
            </p>
          </div>

          <Link to="/projects" onClick={scrollToTop}>
            <Button className="bg-[#000000] hover:bg-[#868686] text-white px-3 py-1 rounded-sm text-sm transition duration-300 ease-in-out whitespace-nowrap">
              {t("seeprojects")}
            </Button> 
          </Link>
        </div>

        {/* SECTION PART */}
        <div className="flex flex-col items-center">
          {/* Cards section */}
          <div className="w-full grid grid-cols-1  lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            
            <div className="project-bg h-[300px] text-center text-white p-6 rounded-sm flex flex-col items-center justify-center">
              <p className="text-[13px] mb-6">Architecture</p>
              <h4> {t('newBuilding')} </h4>
              <Link to="/projects" onClick={scrollToTop}>
                <Button className="shadow-4xl mt-6 bg-[#000000] hover:bg-[#868686] text-white px-4 py-2 rounded-sm transition duration-300 ease-in-out">
                   {t('seeprojectsmin')}
                </Button>
              </Link>
            </div>

            <div className="project-bg1 h-[300px] bg-[#a02828] text-center text-white p-6 rounded-sm "></div>
            <div className="project-bg2 h-[300px] bg-[#a02828] text-center text-white p-6 rounded-sm "></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
