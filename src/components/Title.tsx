import Image from "next/image";
import styles from "../styles/components/Title.module.css";

const Title: React.FC = () => {
  return (
    <div className={styles.title}>
      <div className={styles.titleName}>
        <h1>Victor Araújo</h1>
      </div>
      <div className={styles.social}>
        <a href="https://victoraraujo.com.br/" title="site designer">
          <Image src="/img/Icons/web.svg" width={35} height={34} />
        </a>
        <a href="https://www.github.com/victorb999" title="github">
          <Image src="/img/Icons/github.svg" width={35} height={34} />
        </a>
        <a href="https://www.linkedin.com/in/victorb-araujo/" title="linkedin">
          <Image src="/img/Icons/linkedin.svg" width={35} height={34} />
        </a>
        <a href="https://www.behance.net/victorAraujoDesign" title="behance">
          <Image src="/img/Icons/behance.svg" width={35} height={34} />
        </a>
      </div>
    </div>
  );
};

export default Title;
