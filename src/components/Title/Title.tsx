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
        <motion.h3 initial="hidden" animate="visible" variants={item}>
          Front-end developer
        </motion.h3>
      </motion.div>
      <Social />
    </div>
  )
}

export default Title
