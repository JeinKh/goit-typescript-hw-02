import { FC } from "react";

interface ErrorMassageProps {
  message: string;
}

const ErrorMassage: FC<ErrorMassageProps> = ({ message }) => {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export default ErrorMassage;
