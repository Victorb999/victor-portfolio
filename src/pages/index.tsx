import Image from "next/image";
import Head from "next/head";
import styles from "../styles/pages/Home.module.css";
import Link from "next/link";
import { dataApp } from "./data/appData";

import { motion, Variants } from "framer-motion";
interface CardProps {
  href: string;
  imgSrc: string;
  layoutId: string;
  title: string;
  subtitle?: string;
  text: string;
  link: string;
}

const Card: React.FC<CardProps> = ({
  href,
  imgSrc,
  layoutId,
  title,
  subtitle,
  text,
  link,
}) => {
  return (
    <Link href={href}>
      <motion.div className={styles.card} variants={variants}>
        <div className={styles.image}>
          <motion.img
            src={imgSrc}
            layoutId={layoutId}
            className={styles.imgApp}
          />
        </div>
        <div className={styles.description}>
          <motion.a href={link} variants={item}>
            <h3>{title}</h3>
          </motion.a>
          <motion.h4 variants={item}>{subtitle}</motion.h4>
          <motion.p variants={item}>{text}</motion.p>
        </div>
      </motion.div>
    </Link>
  );
};

const variants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.25,
      delayChildren: 0.3,
      staggerChildren: 0.5,
    },
  },
};

const item: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Victor Araújo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
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
  );
}
