import "./Button.css";

type ButtonProps = {
  title: string;
};

export const Button = ({ title }: ButtonProps) => (
  <button className="button-container">{title}</button>
);
