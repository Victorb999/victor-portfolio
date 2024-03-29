import Image from "next/image";
import styles from "./styles.module.css";
import { motion } from "framer-motion";

const Social: React.FC = () => {
  return (
    <div className={styles.social}>
      <motion.a
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 60,
        }}
        href="https://www.github.com/victorb999"
        title="github"
        target="_blank"
      >
        <Image
          alt={"github"}
          src="/img/Icons/github.svg"
          width={35}
          height={34}
        />
      </motion.a>
      <motion.a
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 70,
        }}
        href="https://www.linkedin.com/in/victorb-araujo/"
        title="linkedin"
        target="_blank"
      >
        <Image
          alt={"linkedin"}
          src="/img/Icons/linkedin.svg"
          width={35}
          height={34}
        />
      </motion.a>
      <motion.a
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 80,
        }}
        href="https://www.behance.net/victorAraujoDesign"
        title="behance"
        target="_blank"
      >
        <Image
          alt={"behance"}
          src="/img/Icons/behance.svg"
          width={35}
          height={34}
        />
      </motion.a>
    </div>
  );
};

export default Social;
