import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ScrollUpButton from "./ScrollUpButton";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
      <ScrollUpButton />
    </div>
  );
};

export default Layout;
