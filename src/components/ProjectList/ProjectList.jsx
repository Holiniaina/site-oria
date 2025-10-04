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
    { src: "https://res.cloudinary.com/dknbojzhe/image/upload/v1757488677/P1116995_z8koaa.webp", category: 'DESIGN INTERIEUR', blurhash: 'L2B:y*0,~V$y00^jRPIp00-pIVn%' },
    { src: "https://res.cloudinary.com/dknbojzhe/image/upload/v1757488677/P1117033_btmkru.webp", category: 'DESIGN INTERIEUR', blurhash: 'L5F=~+00?v00i^9G4okC00.900~q' },
    { src: "https://res.cloudinary.com/dknbojzhe/image/upload/v1757488676/P1117059_v5ahoi.webp", category: 'DESIGN INTERIEUR', blurhash: 'L6FFvs0100%M~WRl00-:R;oJ?aoc' },
    { src: "https://res.cloudinary.com/dknbojzhe/image/upload/v1757488681/DSC_8970_eeirl6.webp", category: 'DESIGN INTERIEUR', blurhash: 'L7HVV9=y00_KDM9sJ4H^8{RR9F%K' },
    { src: "https://res.cloudinary.com/dknbojzhe/image/upload/v1757488677/DSC_8978_amaybx.webp", category: 'DESIGN INTERIEUR', blurhash: 'L5HxyX00010E00=OISOf00kt~q#~' },
    
    { src: "https://res.cloudinary.com/dknbojzhe/image/upload/v1757486709/DJI_0973_jeymgb.webp", category: 'ARCHITECTURE', blurhash: 'LVE{z$axe.ofs+ayWBjt~qWVRjfQ' },
    { src: "https://res.cloudinary.com/dknbojzhe/image/upload/v1757486710/P1091543_nvnxtq.webp", category: 'ARCHITECTURE', blurhash: 'L8F$CP00.T9E-onzXUI9008_?H9Z' },
    { src: "https://res.cloudinary.com/dknbojzhe/image/upload/v1757486708/P1091676_bvgmwr.webp", category: 'ARCHITECTURE', blurhash: 'L28z#}^gI_R2004nM|s.00gk-i.9' },
    { src: "https://res.cloudinary.com/dknbojzhe/image/upload/v1757486710/P1091785_ntgpmt.webp", category: 'ARCHITECTURE', blurhash: 'LVIX{pD$?wkD?wM{oft8tSofMxog' },
    { src: "https://res.cloudinary.com/dknbojzhe/image/upload/v1757486709/P1116973_wwxxdj.webp", category: 'ARCHITECTURE', blurhash: 'LHGlL,xu~qoM4:s:D*oftSRQM{Rj' },
    { src: "https://res.cloudinary.com/dknbojzhe/image/upload/v1757486708/P1117078_ypjszb.webp", category: 'ARCHITECTURE', blurhash: 'LDCjCH~Vxt%L9FWC-:%Lt8ofogoy' },

    { src: "https://res.cloudinary.com/dknbojzhe/image/upload/v1757489432/P1116963_pnveyd.webp", category: 'CARRELAGE', blurhash: 'LOIhvvI[bIkCROWBWCbI~qoz9Zj[' },
    { src: "https://res.cloudinary.com/dknbojzhe/image/upload/v1757489432/P1117015_smepk1.webp", category: 'CARRELAGE', blurhash: 'LLD^7bRkRkV@B@M|s.WB.9V@V@of' },
    { src: "https://res.cloudinary.com/dknbojzhe/image/upload/v1757489431/P1117055_gwhh26.webp", category: 'CARRELAGE', blurhash: 'L1Hx+-F^00of00EM_3t700^,Q,tR' },
    { src: "https://res.cloudinary.com/dknbojzhe/image/upload/v1757489432/P1117085_rlqr4e.webp", category: 'CARRELAGE', blurhash: 'LAGIu{^+9GWVD#M{RkM{_4D%aeM|' },

    { src: "https://res.cloudinary.com/dknbojzhe/image/upload/v1758713261/Image_2025-09-24_115500_1.1.1_f8yfmh.webp", category: 'BÂTIMENTS', blurhash: 'L2HBMPO@00^j~V9ZN10100-:PUX9' },
    { src: "https://res.cloudinary.com/dknbojzhe/image/upload/v1758713261/Image_2025-09-24_115709_1.2.1_kzxs8l.webp", category: 'BÂTIMENTS', blurhash: 'LDI}bUnhVtD%~WE2D%xvMdWANGxu' },
    { src: "https://res.cloudinary.com/dknbojzhe/image/upload/v1757489977/DJI_0982_trvarg.webp", category: 'BÂTIMENTS', blurhash: 'LBF6C4^+tSoy?^j=-pt6M]IT9GM{' },
    { src: "https://res.cloudinary.com/dknbojzhe/image/upload/v1757489970/DSC_8853_lu39hg.webp", category: 'BÂTIMENTS', blurhash: 'LeI~DWxvxv%Nt:t8a~WA?caeM_M{' },
    { src: "https://res.cloudinary.com/dknbojzhe/image/upload/v1757489972/P1117024_ydd8kk.webp", category: 'BÂTIMENTS', blurhash: 'L9D^4Z~3aKt60a-P?Gt7Iw9zD$Rj' },
    { src: "https://res.cloudinary.com/dknbojzhe/image/upload/v1757489974/P1117139_eziskh.webp", category: 'BÂTIMENTS', blurhash: 'LKC7g88wE2?v?wQ,NHxvadbbRjjE' },
    { src: "https://res.cloudinary.com/dknbojzhe/image/upload/v1757489971/P1117166_pzpqa1.webp", category: 'BÂTIMENTS', blurhash: 'LhE:rUbJM|ozyZRjWBkDkrRjoLay' },
    { src: "https://res.cloudinary.com/dknbojzhe/image/upload/v1757489970/P1117190_jomdrq.webp", category: 'BÂTIMENTS', blurhash: 'LaD0}#McRPtQ?wVqRjt7g2obRjWU' },
    { src: "https://res.cloudinary.com/dknbojzhe/image/upload/v1757489971/P1117228_wuehwg.webp", category: 'BÂTIMENTS', blurhash: 'LdEpNK%MM{Rk.TS5RPocyDofWBj]' },
   
    { src: "https://res.cloudinary.com/dknbojzhe/image/upload/v1757490604/DSC_8840_f7hxbr.webp", category: 'RENOVATION', blurhash: 'L2Eyri%M4p?vXqogIAM|Mxt800n#' },
    { src: "https://res.cloudinary.com/dknbojzhe/image/upload/v1757490602/DSC_8947-Avec_accentuation-Bruit_u9ocvx.webp", category: 'RENOVATION', blurhash: 'LDE:0j~qIUxu8^oIxuaeIURjflay' },
    { src: "https://res.cloudinary.com/dknbojzhe/image/upload/v1757490602/P1091660_pkgibd.webp", category: 'RENOVATION', blurhash: 'LFF=:Z%1~p%Noe_3-;%MIV-;Rlxa' },

     { src: "https://res.cloudinary.com/dknbojzhe/image/upload/v1758701561/DJI_0081_k3f5ue.webp", category: 'TERRASSEMENT', blurhash: 'L2HTHe00}Dx]05vg9v~B5-xu0z,W' },
     { src: "https://res.cloudinary.com/dknbojzhe/image/upload/v1758701561/DJI_0161_qisytq.webp", category: 'TERRASSEMENT', blurhash: 'L8IMyQ}@0fOE03K5-oWA11-VRjs.' },
     { src: "https://res.cloudinary.com/dknbojzhe/image/upload/v1758701560/P1138813_bunslt.webp", category: 'TERRASSEMENT', blurhash: 'LyHUw^tTo~adPXWYj]V@fAVri^ju' },
     { src: "https://res.cloudinary.com/dknbojzhe/image/upload/v1758701560/P1138826_zwj41s.webp", category: 'TERRASSEMENT', blurhash: 'LsHUquxvW=bcL4W?WBkCs?V?V@oL' },
    { src: "https://res.cloudinary.com/dknbojzhe/image/upload/v1758701560/P1175006_c1h1n1.webp", category: 'TERRASSEMENT', blurhash: 'LtF$q~t7bdR*K-oLjZkDR5R+adof' },
    { src: "https://res.cloudinary.com/dknbojzhe/image/upload/v1757490756/image14_vmwfkw_bgztdj.webp", category: 'TERRASSEMENT', blurhash: 'LKG8TP-ps.xD2|NxRjWByZoKR*NH' },
    { src: "https://res.cloudinary.com/dknbojzhe/image/upload/v1757490755/image15_fl1hp4_tmkh7v.webp", category: 'TERRASSEMENT', blurhash: 'L9IgQ2%200-q~WV@9t?H9uxGjZxa' },
    { src: "https://res.cloudinary.com/dknbojzhe/image/upload/v1757490754/image48_indbjw_iaao79.webp", category: 'TERRASSEMENT', blurhash: 'LwH-_wbco#t8T}juj]j[s=V@V?V@' },
    { src: "https://res.cloudinary.com/dknbojzhe/image/upload/v1757490752/image49_vhtwys_sf8qh1.webp", category: 'TERRASSEMENT', blurhash: 'LuHBrsaexbn#PXbIR*WBXBbHn$of' },

    { src: "https://res.cloudinary.com/dknbojzhe/image/upload/v1757490996/DSC_8916-Avec_accentuation-Bruit_ukhv0w.webp", category: 'PEINTURE', blurhash: 'LMG]8d%Mx]WE~pWARPRiMwfkRPt8' },
    { src: "https://res.cloudinary.com/dknbojzhe/image/upload/v1757490996/DSC_8919_epmgv1.webp", category: 'PEINTURE', blurhash: 'LJIFG9?wbJof_1IURiofDhWBozt8' },
    { src: "https://res.cloudinary.com/dknbojzhe/image/upload/v1757490997/DSC_8924_lmzyjc.webp", category: 'PEINTURE', blurhash: 'L9I#_Z_MMyD%00X8ofa|01jFRj%L' },
    { src: "https://res.cloudinary.com/dknbojzhe/image/upload/v1757490996/DSC_8942-Avec_accentuation-Bruit_jrgwcd.webp", category: 'PEINTURE', blurhash: 'LADJ06~pt8D*00oejtRj-o%M%2-o' },
    
    { src: "https://res.cloudinary.com/dknbojzhe/image/upload/v1757491393/DSC_9005_eyrh8j.webp", category: 'METALLURGIE', blurhash: 'L5CGJf00158^RjMx4T.T0Ls.^*t8' },
    { src: "https://res.cloudinary.com/dknbojzhe/image/upload/v1757491393/DSC_9026_jsozcl.webp", category: 'METALLURGIE', blurhash: 'LRF~jh~p_3t6jrxuj[WDRPt7M{R-' },
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
                alt={`Image ${index + 1}`}
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
