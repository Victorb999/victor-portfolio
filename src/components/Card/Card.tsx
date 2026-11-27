"use client"
import Link from "next/link"
import styles from "./styles.module.css"
import { motion } from "framer-motion"
import type { Project } from "@/data/appData"

const Card: React.FC<{ project: Project }> = ({ project }) => {
  const { slug, cover, title, subtitle, text, tags, featured } = project
  return (
    <Link
      href={`/app/${slug}`}
      className={`${styles.link} ${featured ? styles.featured : ""}`}
    >
      <motion.div
        className={styles.card}
        whileHover={{ scale: 1.03, y: -4 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div className={styles.image}>
          <motion.img
            src={cover}
            alt={`${title} screenshot`}
            layoutId={`${slug}-app`}
            className={styles.imgApp}
          />
          <p className={styles.description}>{text}</p>
          {featured && <span className={styles.badge}>Latest</span>}
        </div>
        <div className={styles.caption}>
          <h3>{title}</h3>
          <h4>{subtitle}</h4>
          <ul className={styles.tags}>
            {tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
      </motion.div>
    </Link>
  )
}

export default Card
