import Header from "../Header/Header";
import Title from "../Title/Title";
import Footer from "../Footer/Footer";

import styles from "./styles.module.css";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({
  children,
}: LayoutProps): React.ReactElement => {
  return (
    <div className={styles.header}>
      <Header />
      <div className={styles.body}>
        <Title />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
