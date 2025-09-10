import chevron from "../../assets/icons/chevron.png";
import { Link } from "react-router-dom";
import "./Footer.css";
import lamp from "../../assets/icons/lamp.png"
import location from "../../assets/icons/maps.png"
import phone from "../../assets/icons/phone.png"
import { useTranslation } from "react-i18next";

export default function Footer() {
  const {t} = useTranslation()
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  return (
    <footer className="bg-[#a02828] text-white py-12 pb-0">
      <div className="container mx-auto px-6 md:px-24 ">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="flex pl-4 p-2 items-center border border-[#ca6161] relative">
              <div className="mr-4">
                <div className="w-10 h-10 bg-[#868686] flex justify-center items-center translate-y-10">
                  <img src={lamp} alt="icon lamp" />
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold">{t('who')}</h4>
                <p className="text-xs text-white">{t('whotext')}</p>
              </div>
            </div>
            <div className="flex pl-4 p-2 items-center border border-[#ca6161] relative">
              <div className="mr-4">
                <div className="w-10 h-10 bg-[#868686] flex justify-center items-center translate-y-10">
                  <img src={location} alt="icon lamp" />
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold">{t('address')}</h4>
                <p className="text-xs text-white">Antananarivo</p>
                <p className="text-xs text-white">Soavimasoandro Lot II H 115 D</p>
              </div>
            </div>
            <div className="flex pl-4 p-2 items-center border border-[#ca6161] relative">
              <div className="mr-4">
                <div className="w-10 h-10 bg-[#868686] flex justify-center items-center translate-y-10">
                  <img src={phone} alt="icon lamp" />
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold">CONTACT</h4>
                <p className="text-xs text-white">032 01 016 00</p>
              </div>
            </div>
        </div>
        {/* Bottom section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-t border-[#ca6161] pt-10">
          {/* Nos horaires */}
          <div>
            <h4 className="text-sm font-semibold">{t('hours')}</h4>
            <p className="text-xs pt-4 ">{t('workingday')}</p>
            <p className="text-xs pl-4 text-[#000000]">
            {t('workingdays')}
            </p>
            <p className="text-xs pl-4 text-[#000000]">{t('saturday')}</p>
            <p className="text-xs pt-4">{t('vacation')}</p>
            <p className="text-xs pl-4 text-[#000000]">{t('vacationdays')}</p>
          </div>

          {/* Menu */}
          <div>
            <h4 className="text-sm font-semibold">Menu</h4>
            <ul className="pt-3 text-xs space-y-1">
              <li className="border-b border-[#ca6161] flex items-center">
                <img className="w-3 h-2" src={chevron} alt="icon chevron" />{" "}
                <Link
                  onClick={scrollToTop}
                  to="/"
                  className="p-2 block text-white hover:text-white"
                >
                  {t('navhome')}
                </Link>
              </li>
              <li className="border-b border-[#ca6161] flex items-center">
                <img className="w-3 h-2" src={chevron} alt="icon chevron" />
                <Link
                  onClick={scrollToTop}
                  to="/about"
                  className="p-2 block text-white hover:text-white"
                >
                  {t('navabout')}
                </Link>
              </li>
              <li className="border-b border-[#ca6161] flex items-center">
                <img className="w-3 h-2" src={chevron} alt="icon chevron" />
                <Link
                  onClick={scrollToTop}
                  to="/filiales"
                  className="p-2 block text-white hover:text-white"
                >
                  {t('navsubsidiaries')}
                </Link>
              </li>
              <li className="border-b border-[#ca6161] flex items-center">
                <img className="w-3 h-2" src={chevron} alt="icon chevron" />
                <Link
                  onClick={scrollToTop}
                  to="/projects"
                  className="p-2 block text-white hover:text-white"
                >
                  {t('navproject')}
                </Link>
              </li>
              <li className="flex items-center">
                <img className="w-3 h-2" src={chevron} alt="icon chevron" />
                <Link
                  onClick={scrollToTop}
                  to="/contact"
                  className="p-2 block text-white hover:text-white"
                >
                  {t('navcontact')}
                </Link>
              </li>
            </ul>
          </div>
          <div/>
          <div>
            <a href="https://linktr.ee/Oriagroupe.com">
              <img src="https://cdn.brandfetch.io/id_tNIm05N/theme/light/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B" className="w-40"/>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="w-full lg:h-20 mt-12 bg-neutral-900 flex flex-col md:flex-row  justify-center items-center text-xs text-[#000000]">
        <div className="left p-4 lg:px-32 w-full md:w-1/2 h-full flex justify-center flex-col ">
          <p className="text-black hover:text-white">
            Oria Groupe © {t('allright')}. Designed by{" "}
            <Link
              to="https://monde-parallele.company.site"
              className="text-[#868686] underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Monde Parallèle Agency
            </Link>
          </p>
          <div className="mt-4 md:mt-0">
            <Link to="#" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link to="#" className="hover:text-white">
              {" "}
              - Terms of Use
            </Link>
          </div>
        </div>
        <div className="right p-4 lg:px-32 w-full md:w-1/2 h-full flex items-center  justify-end ">
          <div className="social items-center flex justify-between w-12">
            <a href="https://www.facebook.com/MondeParallele">
            <svg
              fill="#ffffff"
              width="24px"
              height="24px"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#ffffff"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M21.95 5.005l-3.306-.004c-3.206 0-5.277 2.124-5.277 5.415v2.495H10.05v4.515h3.317l-.004 9.575h4.641l.004-9.575h3.806l-.003-4.514h-3.803v-2.117c0-1.018.241-1.533 1.566-1.533l2.366-.001.01-4.256z"></path>
              </g>
            </svg>
            </a>
            <a href="https://www.linkedin.com/company/monde-parall%C3%A8le/">
            <svg
              fill="#ffffff"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="-271 283.9 256 235.1"
              xml:space="preserve"
              width="20px"
              height="20px"
              stroke="#ffffff"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g>
                  {" "}
                  <rect
                    x="-264.4"
                    y="359.3"
                    width="49.9"
                    height="159.7"
                  ></rect>{" "}
                  <path d="M-240.5,283.9c-18.4,0-30.5,11.9-30.5,27.7c0,15.5,11.7,27.7,29.8,27.7h0.4c18.8,0,30.5-12.3,30.4-27.7 C-210.8,295.8-222.1,283.9-240.5,283.9z"></path>{" "}
                  <path d="M-78.2,357.8c-28.6,0-46.5,15.6-49.8,26.6v-25.1h-56.1c0.7,13.3,0,159.7,0,159.7h56.1v-86.3c0-4.9-0.2-9.7,1.2-13.1 c3.8-9.6,12.1-19.6,27-19.6c19.5,0,28.3,14.8,28.3,36.4V519h56.6v-88.8C-14.9,380.8-42.7,357.8-78.2,357.8z"></path>{" "}
                </g>{" "}
              </g>
            </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
