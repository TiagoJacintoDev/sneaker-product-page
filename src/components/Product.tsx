import productImage1 from "../images/image-product-1.jpg";
import productImage2 from "../images/image-product-2.jpg";
import productImage3 from "../images/image-product-3.jpg";
import productImage4 from "../images/image-product-4.jpg";
import productImageThumb1 from "../images/image-product-1-thumbnail.jpg";
import productImageThumb2 from "../images/image-product-2-thumbnail.jpg";
import productImageThumb3 from "../images/image-product-3-thumbnail.jpg";
import productImageThumb4 from "../images/image-product-4-thumbnail.jpg";
import cart from "../images/icon-cart.svg";
import previous from "../images/icon-previous.svg";
import next from "../images/icon-next.svg";
import { useState } from "react";
import { ImageSlideModal } from "./ImageSlideModal";

interface Props {
  addToCart: (
    product: { id: number; name: string; price: number; image: string },
    quantity: number
  ) => void;
}

export const Product = ({ addToCart }: Props) => {
  const [productQuantity, setProductQuantity] = useState(1);
  const images = [productImage1, productImage2, productImage3, productImage4];
  const thumbImages = [
    productImageThumb1,
    productImageThumb2,
    productImageThumb3,
    productImageThumb4,
  ];
  const [selectedImageId, setSelectedImageId] = useState(0);
  const [isImageSlideModalOpen, setIsImageSlideModalOpen] = useState(false);
  const closeImageSlideModal = () => setIsImageSlideModalOpen(false);

  const selectPreviousImage = () => {
    setSelectedImageId((prev) => (prev - 1 < 0 ? images.length - 1 : prev - 1));
  };

  const selectNextImage = () => {
    setSelectedImageId((prev) => (prev + 1 > images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      {isImageSlideModalOpen && (
        <ImageSlideModal
          closeImageSlideModal={closeImageSlideModal}
          defaultImageId={selectedImageId}
        />
      )}

      <main className="flex w-full items-center justify-center">
        <div className="flex items-center max-lg:flex-col lg:mx-[11.5%] lg:my-16 lg:w-[1100px] lg:gap-40">
          <div className="relative max-lg:h-[400px] max-lg:w-full">
            <button
              className="absolute top-1/2 left-6 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white lg:hidden"
              onClick={selectPreviousImage}
            >
              <img src={previous} alt="previous image" />
            </button>
            <button
              className="absolute top-1/2 right-6 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white lg:hidden"
              onClick={selectNextImage}
            >
              <img src={next} alt="next image" />
            </button>
            <img
              onClick={() => setIsImageSlideModalOpen(true)}
              className="h-full w-full object-cover lg:rounded-xl"
              src={images[selectedImageId]}
              alt="sneakers"
            />
            <ul className="mt-8 flex items-center gap-6 max-lg:hidden desktop:gap-8">
              {thumbImages.map((image, index) => (
                <li key={index}>
                  <img
                    className={`${
                      index === selectedImageId
                        ? "opacity-60 outline outline-2 outline-primary-orange"
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
          <div className="flex flex-col justify-center max-lg:px-6 max-lg:py-5">
            <h4 className="text-company-title font-bold uppercase text-primary-orange">
              Sneaker Company
            </h4>
            <h1 className="mt-4 text-product-title-mobile font-bold mobile:text-product-title">
              Fall Limited Edition Sneakers
            </h1>
            <p className="mt-6 text-neutral-dark-grayish-blue">
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they'll withstand
              everything the weather can offer.
            </p>
            <div className="mt-6 flex max-lg:items-center max-lg:justify-between lg:flex-col">
              <div className="flex items-center gap-6">
                <span className="text-product-price font-bold">$125.00</span>
                <span className="rounded-md bg-primary-pale-orange px-3 font-bold text-primary-orange">
                  50%
                </span>
              </div>
              <span className="font-bold text-neutral-grayish-blue line-through ">
                $250.00
              </span>
            </div>
            <div className="mt-8 flex gap-4 max-lg:flex-col">
              <div className="flex items-center justify-between gap-4 rounded-lg bg-neutral-light-grayish-blue px-6 font-bold max-lg:py-3">
                <button
                  className="mb-1.5 text-3xl text-primary-orange"
                  onClick={() =>
                    setProductQuantity((prev) => Math.max(1, prev - 1))
                  }
                >
                  -
                </button>
                <span className="cursor-default">{productQuantity}</span>
                <button
                  className="mb-1.5 text-3xl text-primary-orange"
                  onClick={() => setProductQuantity((prev) => prev + 1)}
                >
                  +
                </button>
              </div>
              <button
                className="flex justify-center gap-4 rounded-lg bg-primary-orange p-5 font-bold text-white shadow-[0_20px_50px_-20px] shadow-primary-orange transition-all duration-300 hover:opacity-70"
                onClick={() =>
                  addToCart(
                    {
                      id: 1,
                      name: "Fall Limited Edition Sneakers",
                      price: 125,
                      image: images[0],
                    },
                    productQuantity
                  )
                }
              >
                <img className="brightness-[999]" src={cart} alt="cart icon" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
