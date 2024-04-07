import "./Title.css";

type TitleProps = {
  children: React.ReactNode;
};

export const Title = ({ children }: TitleProps) => (
  <h1 className="font-h1">{children}</h1>
);
