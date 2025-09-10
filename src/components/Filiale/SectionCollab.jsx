import { useTranslation } from "react-i18next";


function SectionCollab() {
  const {t} = useTranslation()
  return (
    <div className="section-collab w-full h-[40vh] md:h-[30vh] px-4 md:px-32 flex items-center justify-center bg-[#868686]">
      <div className="p-4 rounded-sm flex flex-col md:flex-row md:items-center md:justify-between border border-[#ffffff42]">
        <p className="my-2 text-[15px] md:w-2/3 text-white">
          {t('HCMcollab')}
        </p>
      </div>
    </div>
  );
}

export default SectionCollab;
