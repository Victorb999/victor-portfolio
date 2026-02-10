import Sidebar from "../Sidebar/Sidebar";
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
    <>
      <Sidebar />
      <div className={styles.mainWrapper}>
        <div className={styles.header}>
          <div className={styles.body}>
            <Title />
            {children}
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
