import { ReactNode } from "react";
interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <main>{children}</main>;
};

export default Container;
