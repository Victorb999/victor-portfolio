import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Image src="/img/logo.svg" width={80} height={58} alt="Logo" />
        <Link href="/">
          <span>portfolio</span>
        </Link>
        <Link href="/about">
          <span>about</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
