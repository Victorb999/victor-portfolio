import Image from "next/image";
import styles from "../styles/components/Title.module.css";
import { motion, Variants } from "framer-motion";

const Title: React.FC = () => {
  return (
    <div className={styles.title}>
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 100
        }}
        className={styles.titleName}
      >
        <h1>Victor Araújo</h1>
      </motion.div>
      <div className={styles.social}>
        <motion.a
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 50
          }}
          href="https://victorsite-99.web.app/"
          title="site designer"
          target="_blank"
        >
          <Image src="/img/Icons/web.svg" width={35} height={34} />
        </motion.a>
        <motion.a
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 60
          }}
          href="https://www.github.com/victorb999"
          title="github"
          target="_blank"
        >
          <Image src="/img/Icons/github.svg" width={35} height={34} />
        </motion.a>
        <motion.a
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 70
          }}
          href="https://www.linkedin.com/in/victorb-araujo/"
          title="linkedin"
          target="_blank"
        >
          <Image src="/img/Icons/linkedin.svg" width={35} height={34} />
        </motion.a>
        <motion.a
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 80
          }}
          href="https://www.behance.net/victorAraujoDesign"
          title="behance"
          target="_blank"
        >
          <Image src="/img/Icons/behance.svg" width={35} height={34} />
        </motion.a>
      </div>
    </div>
  );
};

export default Title;
