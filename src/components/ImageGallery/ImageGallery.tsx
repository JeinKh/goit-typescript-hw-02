import { FC } from "react";
import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";
import { Image } from "../../../types";

interface ImageGalleryProps {
  images: Image[];
  onImageClick: (image: Image) => void;
}
const ImageGallery: FC<ImageGalleryProps> = ({ images, onImageClick }) => {
  return (
    <ul className={s.wrapper}>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard image={image} onImageClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
