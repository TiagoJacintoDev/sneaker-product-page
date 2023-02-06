import { createPortal } from "react-dom";
import previous from "../images/icon-previous.svg";
import next from "../images/icon-next.svg";
import close from "../images/icon-close.svg";
import { useState } from "react";
import { images, thumbImages } from "../constants/images";

interface Props {
  closeImageSlideModal: () => void;
  defaultImageId: number;
}

export const ImageSlideModal = ({
  closeImageSlideModal,
  defaultImageId = 0,
}: Props) => {
  const [selectedImageId, setSelectedImageId] = useState(defaultImageId);

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
      <div className="fixed top-1/2 left-1/2 z-20 w-[28%] -translate-x-1/2 -translate-y-1/2">
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
