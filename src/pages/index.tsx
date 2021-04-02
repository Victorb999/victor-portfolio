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
          <a href={link}>
            <h3>{title}</h3>
          </a>
          <h4>{subtitle}</h4>
          <p>{text}</p>
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
      duration: 1,
      delayChildren: 1,
      staggerChildren: 0.7
    }
  }
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
          transition={{
            delay: 1
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
            href={"/app/githubusers"}
            imgSrc={"/img/Apps/githubusers.jpg"}
            layoutId={"githubusers-app"}
            title={"GithubUsers"}
            text={"Project to search github user"}
            link={"https://github-users-cyan.vercel.app/"}
          />
        </motion.div>
      </main>
    </div>
  );
}
