import { useState } from 'react';
import { Blurhash } from 'react-blurhash';
import "./ProjectList.css";
import { useTranslation } from 'react-i18next';

function ProjectList() {
  const {t} = useTranslation()
  const [filter, setFilter] = useState('TOUT');
  const [animationKey, setAnimationKey] = useState(0);
  const [loadedImages, setLoadedImages] = useState([]);

  const images = [
    { src: "https://res.cloudinary.com/doqmy6uc2/image/upload/v1744620368/image8_xhz0wx.webp", category: 'DESIGN INTERIEUR', blurhash: 'LDJRU65Z~B000AcGZ~x]01E3D%xW' },
    { src: "https://res.cloudinary.com/doqmy6uc2/image/upload/v1744620421/image9_jibz3l.webp", category: 'DESIGN INTERIEUR', blurhash: 'L-G]UR?wWWROR.RkfQoeWBaejsj]' },
    { src: "https://res.cloudinary.com/doqmy6uc2/image/upload/v1744620400/image10_wknnza.webp", category: 'DESIGN INTERIEUR', blurhash: 'LKG[=_IW~VIV0rt8IAog03bIE1t7' },
    { src: "https://res.cloudinary.com/doqmy6uc2/image/upload/v1744620410/image12_rzfvy0.webp", category: 'DESIGN INTERIEUR', blurhash: 'L3D]o89F~q_300_3?bM{%MD%00M{' },
    { src: "https://res.cloudinary.com/doqmy6uc2/image/upload/v1744878867/image16_mkshlc.webp", category: 'DESIGN INTERIEUR', blurhash: 'LEE3I.a$0KNH~qjZ9FRjN2ayM_s:' },
    { src: "https://res.cloudinary.com/doqmy6uc2/image/upload/v1744878875/image17_tbxxwg.webp", category: 'DESIGN INTERIEUR', blurhash: 'LEE3I.a$0KNH~qjZ9FRjN2ayM_s:' },
    { src: "https://res.cloudinary.com/doqmy6uc2/image/upload/v1744878884/image18_e66hum.webp", category: 'DESIGN INTERIEUR', blurhash: 'LEE3I.a$0KNH~qjZ9FRjN2ayM_s:' },
    { src: "https://res.cloudinary.com/doqmy6uc2/image/upload/v1744878893/image19_ypkdfn.webp", category: 'DESIGN INTERIEUR', blurhash: 'LEE3I.a$0KNH~qjZ9FRjN2ayM_s:' },
    { src: "https://res.cloudinary.com/doqmy6uc2/image/upload/v1744878884/image20_dipqen.webp", category: 'DESIGN INTERIEUR', blurhash: 'LEE3I.a$0KNH~qjZ9FRjN2ayM_s:' },
    { src: "https://res.cloudinary.com/doqmy6uc2/image/upload/v1744878906/image27_ztml89.webp", category: 'DESIGN INTERIEUR', blurhash: 'LEE3I.a$0KNH~qjZ9FRjN2ayM_s:' },
    { src: "https://res.cloudinary.com/doqmy6uc2/image/upload/v1744878906/image28_ki7r0t.webp", category: 'DESIGN INTERIEUR', blurhash: 'LEE3I.a$0KNH~qjZ9FRjN2ayM_s:' },
    { src: "https://res.cloudinary.com/doqmy6uc2/image/upload/v1748605661/image40_ueigb7.jpg", category: 'DESIGN INTERIEUR', blurhash: 'LEE3I.a$0KNH~qjZ9FRjN2ayM_s:' },
    { src: "https://res.cloudinary.com/doqmy6uc2/image/upload/v1744620336/image1_e6cuic.webp", category: 'BÂTIMENTS', blurhash: 'LTEyocR*RiWBO_jYoJofI^V@oJaz' },
    { src: "https://res.cloudinary.com/doqmy6uc2/image/upload/v1744620414/image2_ygw4f1.webp", category: 'BÂTIMENTS', blurhash: 'L8Fr|y?E_44m00~q%Lxu01RPD%%g' },
    { src: "https://res.cloudinary.com/doqmy6uc2/image/upload/v1744620419/image3_cwjhuk.webp", category: 'BÂTIMENTS', blurhash: 'LGKBH;00%MWA~V-=%2j@-=jEWBWB' },
    { src: "https://res.cloudinary.com/doqmy6uc2/image/upload/v1744620436/image4_mwvcay.webp", category: 'BÂTIMENTS', blurhash: 'L5FY_lQ+V?xt00bK?bjYyZf-D$oz' },
    { src: "https://res.cloudinary.com/doqmy6uc2/image/upload/v1744620458/image6_qnhdq8.webp", category: 'BÂTIMENTS', blurhash: 'LALEE40M^h00EE~qR3-:05RO9bjD' },
    { src: "https://res.cloudinary.com/doqmy6uc2/image/upload/v1744620457/image13_jnocam.webp", category: 'BÂTIMENTS', blurhash: 'LEE3I.a$0KNH~qjZ9FRjN2ayM_s:' },
    { src: "https://res.cloudinary.com/doqmy6uc2/image/upload/v1744878950/image21_ukhpmq.webp", category: 'BÂTIMENTS', blurhash: 'LEE3I.a$0KNH~qjZ9FRjN2ayM_s:' },
    { src: "https://res.cloudinary.com/doqmy6uc2/image/upload/v1744878807/image37_swvlrg.webp", category: 'BÂTIMENTS', blurhash: 'LEE3I.a$0KNH~qjZ9FRjN2ayM_s:' },
    { src: "https://res.cloudinary.com/doqmy6uc2/image/upload/v1748605661/image41_qp104p.jpg", category: 'BÂTIMENTS', blurhash: 'LEE3I.a$0KNH~qjZ9FRjN2ayM_s:' },
    { src: "https://res.cloudinary.com/doqmy6uc2/image/upload/v1744620457/image5_numd6d.webp", category: 'ARCHITECTURE', blurhash: 'L3Ey#b-O00%W0C01p~Q^00^,4V_K' },
    { src: "https://res.cloudinary.com/doqmy6uc2/image/upload/v1744620432/image7_rfxxtw.webp", category: 'ARCHITECTURE', blurhash: 'LZHezr9c?ao$.ASjn#kDIqbIaJM|' },
    { src: "https://res.cloudinary.com/doqmy6uc2/image/upload/v1744620405/image11_tjjqm4.webp", category: 'ARCHITECTURE', blurhash: 'L5F~Nv~o4VW94=ocD+9Z?I_201%K' },
    { src: "https://res.cloudinary.com/doqmy6uc2/image/upload/v1744878846/image41_xshxdb.webp", category: 'ARCHITECTURE', blurhash: 'LEE3I.a$0KNH~qjZ9FRjN2ayM_s:' },
    { src: "https://res.cloudinary.com/doqmy6uc2/image/upload/v1744878814/image46_xyfcu1.webp", category: 'ARCHITECTURE', blurhash: 'LEE3I.a$0KNH~qjZ9FRjN2ayM_s:' },
    { src: "https://res.cloudinary.com/doqmy6uc2/image/upload/v1744878803/image42_o8tozd.webp", category: 'ARCHITECTURE', blurhash: 'LEE3I.a$0KNH~qjZ9FRjN2ayM_s:' },
    { src: "https://res.cloudinary.com/doqmy6uc2/image/upload/v1744878804/image36_p7jd3w.webp", category: 'ARCHITECTURE', blurhash: 'LEE3I.a$0KNH~qjZ9FRjN2ayM_s:' },
    { src: "https://res.cloudinary.com/doqmy6uc2/image/upload/v1744878990/image14_vmwfkw.webp", category: 'TERRASSEMENT', blurhash: 'LEE3I.a$0KNH~qjZ9FRjN2ayM_s:' },
    { src: "https://res.cloudinary.com/doqmy6uc2/image/upload/v1744878995/image15_fl1hp4.webp", category: 'TERRASSEMENT', blurhash: 'LEE3I.a$0KNH~qjZ9FRjN2ayM_s:' },
    { src: "https://res.cloudinary.com/doqmy6uc2/image/upload/v1744878819/image48_indbjw.webp", category: 'TERRASSEMENT', blurhash: 'LEE3I.a$0KNH~qjZ9FRjN2ayM_s:' },
    { src: "https://res.cloudinary.com/doqmy6uc2/image/upload/v1744878850/image49_vhtwys.webp", category: 'TERRASSEMENT', blurhash: 'LEE3I.a$0KNH~qjZ9FRjN2ayM_s:' },
    { src: "https://res.cloudinary.com/doqmy6uc2/image/upload/v1744878815/image23_sffwk2.webp", category: 'PEINTURE', blurhash: 'LEE3I.a$0KNH~qjZ9FRjN2ayM_s:' },
    { src: "https://res.cloudinary.com/doqmy6uc2/image/upload/v1744878954/image24_u8pbwj.webp", category: 'PEINTURE', blurhash: 'LEE3I.a$0KNH~qjZ9FRjN2ayM_s:' },
    { src: "https://res.cloudinary.com/doqmy6uc2/image/upload/v1744878962/image25_nagak0.webp", category: 'PEINTURE', blurhash: 'LEE3I.a$0KNH~qjZ9FRjN2ayM_s:' },
    { src: "https://res.cloudinary.com/doqmy6uc2/image/upload/v1744878960/image26_uw76ue.webp", category: 'PEINTURE', blurhash: 'LEE3I.a$0KNH~qjZ9FRjN2ayM_s:' },
    { src: "https://res.cloudinary.com/doqmy6uc2/image/upload/v1744878914/image30_quaexa.webp", category: 'METALLURGIE', blurhash: 'LEE3I.a$0KNH~qjZ9FRjN2ayM_s:' },
    { src: "https://res.cloudinary.com/doqmy6uc2/image/upload/v1744878923/image31_ubde4x.webp", category: 'METALLURGIE', blurhash: 'LEE3I.a$0KNH~qjZ9FRjN2ayM_s:' },
    { src: "https://res.cloudinary.com/doqmy6uc2/image/upload/v1744878944/image34_mpizhb.webp", category: 'METALLURGIE', blurhash: 'LEE3I.a$0KNH~qjZ9FRjN2ayM_s:' },
  ];

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => [...prev, index]);
  };

  const filteredImages = filter === 'TOUT'
    ? images
    : images.filter(image => image.category === filter);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setAnimationKey((prevKey) => prevKey + 1);
  };

  return (
    <section className="bg-white py-20 ">
      <div className="mx-auto flex flex-col items-center px-4 md:px-32">
        <ul className="md:w-2/3 flex flex-wrap justify-evenly pb-5 filters-container">
          <li onClick={() => handleFilterChange('TOUT')} className="cursor-pointer filter-item">
            {filter === 'TOUT' && (
              <span className="inline-block w-2 h-2 bg-[#868686] mr-2"></span>
            )}
            {t('filter')}
          </li>
          <li
            onClick={() => handleFilterChange('DESIGN INTERIEUR')}
            className={`cursor-pointer transition-transform duration-300 filter-item ${filter === 'DESIGN INTERIEUR' ? 'transform scale-105' : ''
              }`}
          >
            {filter === 'DESIGN INTERIEUR' && (
              <span className="inline-block w-2 h-2 bg-[#868686] mr-2"></span>
            )}
           {t('filter1')}
          </li>
          <li
            onClick={() => handleFilterChange('ARCHITECTURE')}
            className={`cursor-pointer transition-transform duration-300 filter-item ${filter === 'ARCHITECTURE' ? 'transform scale-105' : ''
              }`}
          >
            {filter === 'ARCHITECTURE' && (
              <span className="inline-block w-2 h-2 bg-[#868686] mr-2"></span>
            )}
             {t('filter2')}
          </li>
          <li
            onClick={() => handleFilterChange('CARRELAGE')}
            className={`cursor-pointer transition-transform duration-300 filter-item ${filter === 'CARRELAGE' ? 'transform scale-105' : ''
              }`}
          >
            {filter === 'CARRELAGE' && (
              <span className="inline-block w-2 h-2 bg-[#868686] mr-2"></span>
            )}
            {t('filter3')}
          </li>
          <li
            onClick={() => handleFilterChange('BÂTIMENTS')}
            className={`cursor-pointer transition-transform duration-300 filter-item ${filter === 'BÂTIMENTS' ? 'transform scale-105' : ''
              }`}
          >
            {filter === 'BÂTIMENTS' && (
              <span className="inline-block w-2 h-2 bg-[#868686] mr-2"></span>
            )}
            {t('filter4')}
          </li>
          <li
            onClick={() => handleFilterChange('RENOVATION')}
            className={`cursor-pointer transition-transform duration-300 filter-item ${filter === 'RENOVATION' ? 'transform scale-105' : ''
              }`}
          >
            {filter === 'RENOVATION' && (
              <span className="inline-block w-2 h-2 bg-[#868686] mr-2"></span>
            )}
            {t('filter5')}
          </li>
          <li
            onClick={() => handleFilterChange('TERRASSEMENT')}
            className={`cursor-pointer transition-transform duration-300 filter-item ${filter === 'TERRASSEMENT' ? 'transform scale-105' : ''
              }`}
          >
            {filter === 'TERRASSEMENT' && (
              <span className="inline-block w-2 h-2 bg-[#868686] mr-2"></span>
            )}
            {t('filter6')}
          </li> 
          <li
            onClick={() => handleFilterChange('PEINTURE')}
            className={`cursor-pointer transition-transform duration-300 filter-item ${filter === 'PEINTURE' ? 'transform scale-105' : ''
              }`}
          >
            {filter === 'PEINTURE' && (
              <span className="inline-block w-2 h-2 bg-[#868686] mr-2"></span>
            )}
            {t('filter7')}
          </li>
          <li
            onClick={() => handleFilterChange('METALLURGIE')}
            className={`cursor-pointer transition-transform duration-300 filter-item ${filter === 'METALLURGIE' ? 'transform scale-105' : ''
              }`}
          >
            {filter === 'METALLURGIE' && (
              <span className="inline-block w-2 h-2 bg-[#868686] mr-2"></span>
            )}
            {t('filter8')}
          </li>
        </ul>

        {/* Section Projects Cards */}
        <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredImages.map((image, index) => (
            <div
              key={`${animationKey}-${index}`}
              className="flex justify-center fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Blurhash
                hash={image.blurhash}
                width="100%"
                height="100%"
                resolutionX={32}
                resolutionY={32}
                punch={1}
              />
              <img
                className="w-full h-auto object-cover shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
                src={image.src}
                //src={`${image.src.replace('/upload/', '/upload/f_auto,q_auto,w_800/')}`}
                alt={`Image ${index + 1}`}
                loading="lazy"
                onLoad={() => handleImageLoad(index)}
                style={{ display: loadedImages.includes(index) ? 'block' : 'none' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectList;
