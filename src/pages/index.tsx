import Image from "next/image";
import Head from "next/head";
import styles from "../styles/pages/Home.module.css";
import Link from "next/link";

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
  link
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
            <h3 >{title}</h3>
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
      duration: 0.3,
      delayChildren: 1,
      staggerChildren: 0.7
    }
  }
};

const item : Variants =  {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

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
          transition={{
            delay: 0.4
          }}
          variants={variants}
          initial="hidden"
          animate="visible"
        >
          <Card
            href={"/app/pokeagenda"}
            imgSrc={"/img/Apps/pokeagenda.jpg"}
            layoutId={"pokeagenda-app"}
            title={"PokeAgenda"}
            subtitle={"A Pokedex made with vue3 + ts"}
            text={"Search every pokemon, types and generation."}
            link={"https://pokeagenda-8b318.web.app/"}
          />
          <Card
            href={"/app/lolzinho"}
            imgSrc={"/img/Apps/lolzinho.jpg"}
            layoutId={"lolzinho-app"}
            title={"LOLzinho"}
            subtitle={"A wiki lol champions made with vue + vuetify"}
            text={"Search all champions of League of legends"}
            link={"https://lol-zinho.victorb999.vercel.app"}
          />
          <Card
            href={"/app/receitastop"}
            imgSrc={"/img/Apps/receitastop.jpg"}
            layoutId={"receitastop-app"}
            title={"ReceitasTop"}
            text={"A project to calculate prices of recipe"}
            link={"https://receitastop.vercel.app"}
          />
          <Card
            href={"/app/nbastats"}
            imgSrc={"/img/Apps/nbastats.jpg"}
            layoutId={"nbastats-app"}
            title={"NBAstats"}
            subtitle={"Project in Nextjs"}
            text={"Search all NBA teams and players"}
            link={"https://nba-stats-pi.vercel.app/"}
          />
        </motion.div>
      </main>
    </div>
  );
}
