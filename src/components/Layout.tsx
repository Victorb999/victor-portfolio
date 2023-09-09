import Header from "./Header";
import Title from "./Title";
import Footer from "./Footer";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({
  children,
}: LayoutProps): React.ReactElement => {
  return (
    <div className="header">
      <Header />
      <Title />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
