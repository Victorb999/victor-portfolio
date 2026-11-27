"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { notFound } from "next/navigation"
import styles from "./styles.module.css"
import { projects } from "../../../data/appData"
import * as React from "react"
import { CardApp } from "@/components/CardApp/CardApp"
import { GitHubLogoIcon, ExternalLinkIcon, DownloadIcon } from "@radix-ui/react-icons"

type AppProps = {
  params: Promise<{ id: string }>
}

export default function AppPage(props: AppProps) {
  const { id } = React.use(props.params)
  const project = projects.find((p) => p.slug === id)
  if (!project) notFound()

  const { title, logo, cover, text, tags, github, site, download, highlights, screenshots } = project

  return (
    <div
      className={styles.all}
      style={{ "--bg-image": `url(${cover})` } as React.CSSProperties}
    >
      <CardApp>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.title}>
              <img src={logo} alt="" className={styles.logo} />
              <h1>{title}</h1>
            </div>
            <motion.img
              src={cover}
              alt={`${title} screenshot`}
              layoutId={`${id}-app`}
              className={styles.img}
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className={styles.description}
            >
              <p>{text}</p>
              <ul className={styles.tags}>
                {tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              {highlights && (
                <ul className={styles.highlights}>
                  {highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              )}
            </motion.div>
            {screenshots && (
              <div className={styles.gallery}>
                {screenshots.slice(1).map((src) => (
                  <a key={src} href={src} target="_blank" rel="noreferrer">
                    <img src={src} alt={`${title} screenshot`} loading="lazy" />
                  </a>
                ))}
              </div>
            )}
            <div className={styles.links}>
              <a href={github} target="_blank" rel="noreferrer">
                <GitHubLogoIcon /> <span>Github</span>
              </a>
              <a href={site} target="_blank" rel="noreferrer">
                <ExternalLinkIcon /> <span>{download ? "Website" : "Demo"}</span>
              </a>
              {download && (
                <a href={download} target="_blank" rel="noreferrer">
                  <DownloadIcon /> <span>Download</span>
                </a>
              )}
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
