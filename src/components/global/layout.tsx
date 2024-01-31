import { ReactNode } from "react";
import Nav from "../ui/nav";
import Footer from "../ui/footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="text-sm mobile:text-base">
      <Nav />
      <div className="flex flex-col min-h-screen items-center ">
        <div className="flex-1 max-w-[1128px] min-w-[375px] w-full bg-m-blue-1">
          <div className="top-15">{children}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
