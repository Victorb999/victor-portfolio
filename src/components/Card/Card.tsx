import Link from "next/link";
import styles from "./styles.module.css";
import { useState } from "react";
import { motion, Variants } from "framer-motion";

const variants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.25,
      delayChildren: 0.3,
      staggerChildren: 0.5,
    },
  },
};

const item: Variants = {
  hidden: { y: -30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

interface CardProps {
  href: string;
  imgSrc: string;
  layoutId: string;
  title: string;
  subtitle?: string;
  text: string;
  link: string;
}

const Card: React.FC<CardProps> = ({
  href,
  imgSrc,
  layoutId,
  title,
  subtitle,
  text,
}) => {
  const [showDescription, setShowDescription] = useState(false);
  return (
    <Link href={href}>
      <motion.div
        className={styles.card}
        variants={variants}
        onHoverStart={() => setShowDescription(true)}
        onHoverEnd={() => setShowDescription(false)}
      >
        <div className={styles.image}>
          <motion.img
            src={imgSrc}
            layoutId={layoutId}
            className={styles.imgApp}
          />
        </div>
        {showDescription && (
          <motion.div
            className={styles.description}
            initial="hidden"
            animate="visible"
            variants={item}
          >
            <h3>{title}</h3>
            <h4>{subtitle}</h4>
            <p>{text}</p>
          </motion.div>
        )}
      </motion.div>
    </Link>
  );
};

export default Card;
