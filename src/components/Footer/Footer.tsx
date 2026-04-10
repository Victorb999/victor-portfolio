"use client"
import styles from "./styles.module.css"
import { HeartFilledIcon } from "@radix-ui/react-icons"

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <span className={styles.text}>
        Created with <HeartFilledIcon className={styles.heart} /> by Victor Araújo · Next.js · {new Date().getFullYear()}
      </span>
    </footer>
  )
}

export default Footer
