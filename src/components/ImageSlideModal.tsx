import { createPortal } from "react-dom";
import previous from "../images/icon-previous.svg";
import next from "../images/icon-next.svg";
import close from "../images/icon-close.svg";
import { useState } from "react";
import productImage1 from "../images/image-product-1.jpg";
import productImage2 from "../images/image-product-2.jpg";
import productImage3 from "../images/image-product-3.jpg";
import productImage4 from "../images/image-product-4.jpg";
import productImageThumb1 from "../images/image-product-1-thumbnail.jpg";
import productImageThumb2 from "../images/image-product-2-thumbnail.jpg";
import productImageThumb3 from "../images/image-product-3-thumbnail.jpg";
import productImageThumb4 from "../images/image-product-4-thumbnail.jpg";

interface Props {
  closeImageSlideModal: () => void;
  defaultImageId: number;
}

export const ImageSlideModal = ({
  closeImageSlideModal,
  defaultImageId = 0,
}: Props) => {
  const [selectedImageId, setSelectedImageId] = useState(defaultImageId);
  const images = [productImage1, productImage2, productImage3, productImage4];
  const thumbImages = [
    productImageThumb1,
    productImageThumb2,
    productImageThumb3,
    productImageThumb4,
  ];

  const selectPreviousImage = () => {
    setSelectedImageId((prev) => (prev - 1 < 0 ? images.length - 1 : prev - 1));
  };

  const selectNextImage = () => {
    setSelectedImageId((prev) => (prev + 1 > images.length - 1 ? 0 : prev + 1));
  };

  return createPortal(
    <>
      <div
        className="fixed top-0 left-0 z-10 h-full w-full bg-black opacity-70"
        onClick={closeImageSlideModal}
      />
      <div className="fixed top-1/2 left-1/2 z-20 w-4/12 -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          <button onClick={closeImageSlideModal}>
            <img
              className="absolute -top-5 right-0 w-5 brightness-[500]"
              src={close}
              alt="close image slide selector"
            />
          </button>
          <img
            className="rounded-xl"
            src={images[selectedImageId]}
            alt="image"
          />
          <button
            className="absolute top-1/2 -left-6 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white"
            onClick={selectPreviousImage}
          >
            <img src={previous} alt="previous image" />
          </button>
          <button
            className="absolute top-1/2 -right-6 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white"
            onClick={selectNextImage}
          >
            <img src={next} alt="next image" />
          </button>
        </div>

        <ul className="mt-8 flex items-center gap-6 max-lg:hidden desktop:gap-8">
          {thumbImages.map((image, index) => (
            <li key={index}>
              <img
                className={`${
                  index === selectedImageId
                    ? "outline outline-2 outline-primary-orange"
                    : ""
                } rounded-lg`}
                onClick={() => setSelectedImageId(index)}
                src={image}
                alt="sneaker thumbnail"
              />
            </li>
          ))}
        </ul>
      </div>
    </>,
    document.getElementById("portal") as Element
  );
};
