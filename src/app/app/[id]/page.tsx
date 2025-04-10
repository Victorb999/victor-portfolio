"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import styles from "./styles.module.css"
import { dataAppPage, Apps } from "../../../data/appData"
import * as React from "react"
import { CardApp } from "@/components/CardApp/CardApp"
import { GitHubLogoIcon, ExternalLinkIcon } from "@radix-ui/react-icons"

type AppProps = {
  params: Promise<{ id: string }>
}

export default function appPage(props: AppProps) {
  const { id } = React.use(props.params)

  const dataApp: Apps = dataAppPage[id]

  if (!dataApp) {
    return <div>App not found</div>
  }

  return (
    <div className={styles.all}>
      <CardApp>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.title}>
              <img
                src={dataApp.logo}
                alt={dataApp.title}
                className={styles.logo}
              />
              <h1>{dataApp.title}</h1>
            </div>
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
              <p>{dataApp.text}</p>
            </motion.div>
            <div className={styles.links}>
              <a href={dataApp.github} target="_blank" rel="noreferrer">
                <GitHubLogoIcon /> <span>Github</span>
              </a>
              <a href={dataApp.site} target="_blank" rel="noreferrer">
                <ExternalLinkIcon /> <span>Demo</span>
              </a>
            </div>
          </div>
        </div>
      </CardApp>
      <Link href="/">
        <span>Back to Home</span>
      </Link>
    </div>
  )
}
