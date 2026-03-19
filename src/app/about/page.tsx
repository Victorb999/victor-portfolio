"use client"
import styles from "./styles.module.css"
import { motion, Variants } from "framer-motion"
import TerminalBlock from "@/components/Terminal/TerminalBlock"
const variants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      delayChildren: 1,
      staggerChildren: 0.7,
    },
  },
}
export default function About() {
  return (
    <div className={styles.container}>
      <motion.img
        initial={{ x: 100 }}
        animate={{ x: 0, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 100,
        }}
        src="/img/me.jpeg"
        alt="Me"
        className={styles.img}
      />
      <motion.div
        className={styles.aboutMe}
        transition={{
          delay: 1,
        }}
        variants={variants}
        initial="hidden"
        animate="visible"
      >
        <TerminalBlock
          lines={[
            "whoami",
            "Victorb999",
            "cat about.txt",
            "I’m a dev since 2012, originally working with php, asp, vb and .net.",
            "Nowadays my heart belongs to the Front End: Vuejs, React, Next.js.",
            "I’m a design graphic/UX enthusiast, always trying to bring nice visuals to my projects."
          ]}
          typingSpeed={35}
        />
      </motion.div>
    </div>
  )
}
