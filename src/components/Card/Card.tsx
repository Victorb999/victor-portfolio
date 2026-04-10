"use client"
import Link from "next/link"
import styles from "./styles.module.css"
import { motion, Variants } from "framer-motion"

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
}

const descVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.25,
      staggerChildren: 0.1,
    },
  },
}

interface CardProps {
  href: string
  imgSrc: string
  layoutId: string
  title: string
  subtitle?: string
  text: string
  link: string
}

const Card: React.FC<CardProps> = ({
  href,
  imgSrc,
  layoutId,
  title,
  subtitle,
  text,
}) => {
  return (
    <Link href={href}>
      <motion.div
        className={styles.card}
        variants={variants}
        whileHover={{ scale: 1.04, y: -6 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div className={styles.image}>
          <motion.img
            src={imgSrc}
            layoutId={layoutId}
            className={styles.imgApp}
          />
        </div>
        <motion.div
          className={styles.description}
          initial="hidden"
          whileHover="visible"
          variants={descVariants}
        >
          <h3>{title}</h3>
          <h4>{subtitle}</h4>
          <p>{text}</p>
        </motion.div>
      </motion.div>
    </Link>
  )
}

export default Card
