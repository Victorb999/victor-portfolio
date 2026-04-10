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

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1,
    },
  },
}

const techStack = [
  { name: "React", color: "#61DAFB" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Next.js", color: "#ffffff" },
  { name: "Vue.js", color: "#4FC08D" },
  { name: "Node.js", color: "#339933" },
  { name: "JavaScript", color: "#F7DF1E" },
  { name: "GraphQL", color: "#E10098" },
  { name: "PHP", color: "#777BB4" },
  { name: "Tailwind", color: "#06B6D4" },
  { name: "Go", color: "#00ADD8" },
  { name: "Docker", color: "#2496ED" },
  { name: "AI / LLMs", color: "#a78bfa" },
]

const stats = [
  { value: "10+", label: "Years of Experience" },
  { value: "Frontend", label: "Technical Lead" },
]

export default function About() {
  return (
    <div className={styles.container}>
      {/* Top Section: Photo + Terminal */}
      <div className={styles.topSection}>
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
              "I'm a dev since 2012, originally working with php, asp, vb and .net.",
              "Nowadays my heart belongs to the Front End: Vuejs, React, Next.js.",
              "I'm a design graphic/UX enthusiast, always trying to bring nice visuals to my projects.",
            ]}
            typingSpeed={35}
          />
        </motion.div>
      </div>

      {/* Stats Section */}
      <motion.div
        className={styles.statsSection}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            className={styles.statCard}
            variants={fadeUp}
          >
            <span className={styles.statValue}>{stat.value}</span>
            <span className={styles.statLabel}>{stat.label}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Tech Stack Section */}
      <motion.div
        className={styles.techSection}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h3 className={styles.sectionTitle}>
          <span className={styles.prompt}>$</span> Tech Stack
        </h3>
        <div className={styles.techGrid}>
          {techStack.map((tech) => (
            <motion.div
              key={tech.name}
              className={styles.techBadge}
              variants={fadeUp}
              whileHover={{ scale: 1.08, y: -3 }}
              style={{ "--tech-color": tech.color } as React.CSSProperties}
            >
              <span className={styles.techDot}></span>
              {tech.name}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
