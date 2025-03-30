"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import styles from "./styles.module.css"
import { dataAppPage, Apps } from "../../../data/appData"
import * as React from "react"

type AppProps = {
  params: Promise<{ id: string }>
}

export default function appPage(props: AppProps) {
  const { id } = React.use(props.params)

  const dataApp: Apps = dataAppPage[id]
  console.log("dataApp", dataApp)

  if (!dataApp) {
    return <div>App not found</div>
  }

  return (
    <div className={styles.all}>
      <div className={styles.container}>
        <motion.img
          src={dataApp.img}
          layoutId={`${id}-app`}
          className={styles.img}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 1 }}
          className={styles.description}
        >
          <h1>{dataApp.id}</h1>
          <p>{dataApp.text}</p>

          <a href={dataApp.github}>
            <i className="fab fa-github"></i> GitHub
          </a>
          <a href={dataApp.site}>
            <i className="fab fa-chrome"></i> Demo
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className={styles.back}
      >
        <Link href="/">
          <span>Back to Home</span>
        </Link>
      </motion.div>
    </div>
  )
}
