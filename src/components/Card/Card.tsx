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
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
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
          <div className={styles.description}>
            <motion.h3 variants={item}>{title}</motion.h3>
            <motion.h4 variants={item}>{subtitle}</motion.h4>
            <motion.p variants={item}>{text}</motion.p>
          </div>
        )}
      </motion.div>
    </Link>
  );
};

export default Card;
