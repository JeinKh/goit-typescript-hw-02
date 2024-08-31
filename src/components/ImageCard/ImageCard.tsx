import { FC } from "react";
import { Image } from "../../../types";

interface ImageCardProps {
  image: Image;
  onImageClick: (image: Image) => void;
}

const ImageCard: FC<ImageCardProps> = ({ image, onImageClick }) => {
  return (
    <div>
      <img
        src={image.urls.small}
        alt={image.alt_description || "Image"}
        onClick={() => onImageClick(image)}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default ImageCard;
