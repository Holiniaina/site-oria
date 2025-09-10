import { useTranslation } from "react-i18next";

function SectionService() {
  const {t} = useTranslation()
  return (
    <section className="py-12 bg-gray-100 px-4 md:px-32 text-center">
      <div className="container mx-auto">
        <div className="mb-8 text-start">
          <h3 className="text-[#a02828] text-[12px] font-semibold uppercase flex items-center">
            <span className="inline-block w-2 h-2 bg-[#868686] mr-2"></span>
            {t('quality')}
          </h3>
          <h2 className="text-3xl font-bold text-gray-900">{t('ourservice')}</h2>
          <div className="flex flex-col md:flex-row justify-between">
            <p className="my-2 text-[15px] md:w-2/3 text-gray-400">
              {t('HCMservice')}
            </p>
          </div>
        </div>
        <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          <div className="flex flex-col justify-center bg-[#a02828] text-white p-6">
            <div className="flex justify-center mt-8">
              <svg
                width="50px"
                height="50px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M0.788086 22.571H23.2501"
                    stroke="#ffffff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                  <path
                    d="M9.77313 22.5V7.341L2.28613 8.838V22.5"
                    stroke="#ffffff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                  <path
                    d="M21.7534 22.5V7.341L9.77344 2.101V22.5"
                    stroke="#ffffff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                  <path
                    d="M18.7576 22.5L18.7676 16.079C18.7676 15.6812 18.6095 15.2996 18.3282 15.0183C18.0469 14.737 17.6654 14.579 17.2676 14.579H14.2676C13.8698 14.579 13.4882 14.737 13.2069 15.0183C12.9256 15.2996 12.7676 15.6812 12.7676 16.079V22.5"
                    stroke="#ffffff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                  <path
                    d="M0.75 9.146L9.773 7.341"
                    stroke="#ffffff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                  <path
                    d="M8.23828 1.429L23.2463 7.994"
                    stroke="#ffffff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                  <path
                    d="M21.7528 7.341V2.101H18.7578V5.875"
                    stroke="#ffffff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                  <path
                    d="M13 8H15"
                    stroke="#ffffff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </div>
            <h3 className="text-xl my-6">{t('service1')}</h3>
          </div>
          <div className="bg-[#868686] text-white p-6">
            <div className="flex justify-center mt-8">
              <svg
                width="50px"
                height="50px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g id="Environment / Water_Drop">
                    {" "}
                    <path
                      id="Vector"
                      d="M16.0001 13.3848C16.0001 14.6088 15.526 15.7828 14.6821 16.6483C14.203 17.1397 13.6269 17.5091 13 17.7364M19 13.6923C19 7.11538 12 2 12 2C12 2 5 7.11538 5 13.6923C5 15.6304 5.7375 17.4893 7.05025 18.8598C8.36301 20.2302 10.1436 20.9994 12.0001 20.9994C13.8566 20.9994 15.637 20.2298 16.9497 18.8594C18.2625 17.4889 19 15.6304 19 13.6923Z"
                      stroke="#ffffff"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>{" "}
                </g>
              </svg>
            </div>

            <h3 className="text-xl my-6"> {t('service2')}</h3>
          </div>
          <div className="bg-[#868686] text-white p-6">
            <div className="flex justify-center mt-8">
              <svg
                fill="#ffffff"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="50px"
                height="50px"
                viewBox="0 0 245 256"
                enable-background="new 0 0 245 256"
                xml:space="preserve"
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
                  <path d="M190,63.24V7h-31v27.73L122.97,1.82L1.94,110.15l18.4,20.74L39,114.04V254h167V115.08l18.36,16.85l18.89-20.22L190,63.24z M109.63,203.13c-0.24,0-39.18-38.76-39.18-38.76s15.14-14.91,15.38-14.91c0.23,0,24.5,24.04,24.5,24.04l49.49-49.37l14.73,14.61 C174.55,138.74,110.04,203.13,109.63,203.13z"></path>{" "}
                </g>
              </svg>
            </div>
            <h3 className="text-xl my-6"> {t('service3')}</h3>
          </div>
          <div className="bg-[#868686] text-white p-6">
            <div className="flex justify-center mt-8">
              <svg
                fill="#ffffff"
                width="50px"
                height="50px"
                viewBox="0 0 1920 1920"
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
                  {" "}
                  <path
                    d="M1706.235 1807.059H350.941V112.94h903.53v451.765h451.764v1242.353Zm-338.823-1670.74 315.443 315.447h-315.443V136.32Zm402.182 242.487L1440.372 49.58C1408.296 17.62 1365.717 0 1320.542 0H238v1920h1581.175V498.635c0-45.176-17.618-87.755-49.58-119.83ZM576.823 1242.353h790.589v-112.94H576.823v112.94Zm0-451.765h903.53V677.647h-903.53v112.941Zm0 677.647h451.765v-112.941H576.823v112.941Zm0-451.764h677.648V903.53H576.823v112.941Zm0-451.765h451.765V451.765H576.823v112.941Z"
                    fill-rule="evenodd"
                  ></path>{" "}
                </g>
              </svg>
            </div>
            <h3 className="text-xl my-6"> {t('service4')}</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionService;
