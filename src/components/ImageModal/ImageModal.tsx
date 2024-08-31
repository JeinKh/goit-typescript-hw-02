import { FC } from "react";
import Modal from "react-modal";
import { Image } from "../../../types";

Modal.setAppElement("#root");

interface ImageModalProps {
  image: Image;
  onClose: () => void;
}
const ImageModal: FC<ImageModalProps> = ({ image, onClose }) => {
  return (
    <div>
      <Modal
        isOpen={!!image}
        onRequestClose={onClose}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
      >
        <div>
          <img src={image?.urls?.regular} alt="Large view" />
        </div>
      </Modal>
    </div>
  );
};

export default ImageModal;
