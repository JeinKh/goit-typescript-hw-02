import { FC } from "react";
import { RotatingLines } from "react-loader-spinner";
import s from "./Loader.module.css";

const Loader: FC = () => {
  return (
    <div className={s.loader}>
      <RotatingLines
        visible={true}
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
      />
    </div>
  );
};

export default Loader;
