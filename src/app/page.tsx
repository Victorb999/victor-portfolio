"use client"
import styles from "./styles.module.css"
import Card from "../components/Card/Card"
import { dataApp } from "../data/appData"

import { motion, Variants } from "framer-motion"

const variants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.25,
      staggerChildren: 0.5,
    },
  },
}

const item: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

export default function Home() {
  return (
    <div className={styles.container2}>
      <main className={styles.main2}>
        <motion.div
          className={styles.grid}
          variants={variants}
          initial="hidden"
          animate="visible"
        >
          {dataApp.map((card) => (
            <Card
              key={card.id}
              href={card.href}
              imgSrc={card.imgSrc}
              layoutId={card.layoutId}
              title={card.title}
              subtitle={card.subtitle}
              text={card.text}
              link={card.link}
            />
          ))}
        </motion.div>
      </main>
    </div>
  )
}
