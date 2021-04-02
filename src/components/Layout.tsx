import Header from "./Header";
import Title from "./Title";
import Footer from "./Footer";

const Layout: React.FC = ({ children }) => {
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
