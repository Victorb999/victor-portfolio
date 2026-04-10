"use client"
import styles from "./styles.module.css"
import { motion, Variants } from "framer-motion"
import Social from "../Social/Social"
import AnimeText from "./AnimeText"

const item: Variants = {
  hidden: { x: -30, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      delayChildren: 0.3,
      staggerChildren: 0.2,
      delay: 7.5,
    },
  },
}

const tagline: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 8.5,
      ease: "easeOut",
    },
  },
}

const Title: React.FC = () => {
  return (
    <div className={styles.title}>
      <motion.div className={styles.titleName}>
        <div className={styles.titleNameFlex}>
          <AnimeText delay={1} baseText="Victor" cursor={"BEGIN"} />
        </div>
        <div className={styles.titleNameFlex}>
          <AnimeText delay={4} baseText="Araújo" cursor={"END"} />
        </div>
        <motion.h3
          className={styles.role}
          initial="hidden"
          animate="visible"
          variants={item}
        >
          Senior Frontend Engineer
        </motion.h3>
        <motion.p
          className={styles.tagline}
          initial="hidden"
          animate="visible"
          variants={tagline}
        >
          Building interfaces that inspire.
        </motion.p>
      </motion.div>
      <Social />
    </div>
  )
}

export default Title
