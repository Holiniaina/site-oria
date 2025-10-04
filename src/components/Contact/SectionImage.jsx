import { useState, useEffect } from "react";
import { BlurhashCanvas } from "react-blurhash";


function SectionImage() {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const blurHash = "LAH_;#oB050t00%QRMMa05%P$[M|"; // lien BlurHash

  useEffect(() => {
    const img = new Image();
    img.src = "https://res.cloudinary.com/dknbojzhe/image/upload/v1757503267/DSC_8980_bt5gph.webp";
    img.onload = () => setIsImageLoaded(true);
  }, []);

  return (
    <div className="px-4 md:px-32 py-11 h-80 lg:h-[80vh]">
      <div
        className="h-full w-full rounded-md relative"
        style={{
          background: isImageLoaded
            ? `url(${"https://res.cloudinary.com/dknbojzhe/image/upload/v1757503267/DSC_8980_bt5gph.webp"}) center/cover no-repeat`
            : "",
        }}
      >
        {!isImageLoaded && (
          <BlurhashCanvas
            hash={blurHash}
            className="absolute inset-0 w-full rounded-md h-full"
          />
        )}
      </div>
    </div>
  );
}

export default SectionImage;
