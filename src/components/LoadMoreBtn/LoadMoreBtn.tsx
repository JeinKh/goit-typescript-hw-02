import { FC } from "react";

interface LoadMoreBtnProps {
  onClick: () => void;
}

const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <div>
      <button onClick={onClick}>Load More</button>
    </div>
  );
};

export default LoadMoreBtn;
