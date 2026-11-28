"use client"
import styles from "./styles.module.css"
import Card from "../components/Card/Card"
import { projects } from "../data/appData"

import { motion } from "framer-motion"
import Title from "@/components/Title/Title"

export default function Home() {
  return (
    <div className={styles.main}>
      <Title />
      <div className={styles.container2}>
        <main className={styles.main2}>
          <motion.div
            className={styles.grid}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            {projects.map((project) => (
              <Card key={project.slug} project={project} />
            ))}
          </motion.div>
        </main>
      </div>
    </div>
  )
}
