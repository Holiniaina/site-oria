import "./Clients.css";
import { useTranslation } from "react-i18next";

function Clients() {
  const {t} = useTranslation();
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 md:px-32">
        {/* Section title */}
        <div className="mb-8">
          <h3 className="text-[#a02828] text-[12px] font-semibold uppercase flex items-center">
            <span className="inline-block w-2 h-2 bg-oriaTheme mr-2 ease-in-out"></span>
           {t('trust')}
          </h3>
          <h2 className="text-3xl font-bold text-gray-900">{t('ourclient')}</h2>
          <div className="flex flex-col md:flex-row justify-between">
            <p className="my-2 text-[15px] md:w-2/3 text-gray-400">
              {t('clientabout')}
            </p>
          </div>
        </div>

        <div className="logo-clients flex flex-wrap gap-4 lg:gap-0 lg:flex-nowrap  justify-evenly items-center mb-4">
          <div className="logo h-[100%] basis-1/3 md:w-[100%] flex items-center justify-center">
            <img src="https://res.cloudinary.com/doqmy6uc2/image/upload/v1744867176/bricofer_logo_gnjp6t.webp" alt="logo bricofer" />
          </div>
          <div className="logo h-[100%] basis-1/3 md:w-[100%] flex items-center justify-center">
            <img src="https://res.cloudinary.com/doqmy6uc2/image/upload/v1744878247/akoor_logo_yikfq2.webp" alt="logo akoor" />
          </div>
          <div className="logo h-[100%] basis-1/3 md:w-[100%] flex items-center justify-center">
            <img src="https://res.cloudinary.com/doqmy6uc2/image/upload/v1744878247/madstell_logo_smhjsu.webp" alt="logo madsteel" />
          </div>
          <div className="logo h-[100%] basis-1/3 md:w-[100%] flex items-center justify-center">
            <img src="https://res.cloudinary.com/doqmy6uc2/image/upload/v1744867227/luceo_logo_1_hsqypg.webp" alt="logo luceo" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Clients;
