import { motion } from "framer-motion";
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import styles from "../../styles/pages/App.module.css";

type Apps = {
  id: string;
  img: string;
  github: string;
  text: string;
  site: string;
};

type AppProps = {
  dataApp: Apps;
};
const App = ({ dataApp }: AppProps) => {
  return (
    <div className={styles.all}>
      <div
        className={styles.container}
      >
        <motion.img
          src={dataApp.img}
          layoutId={`${dataApp.id}-app`}
          className={styles.img}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className={styles.description}
        > 
          <h1>{dataApp.id}</h1>
          <p>{dataApp.text}</p>
          
          <a href={dataApp.github}><i className="fab fa-github"></i> GitHub</a>
          <a href={dataApp.site}><i className="fab fa-chrome"></i> Demo</a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className={styles.back}
      >
        <Link href="/">
          <a>Back to Home</a>
        </Link>
      </motion.div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          id: "pokeagenda"
        }
      },
      {
        params: {
          id: "lolzinho"
        }
      },
      {
        params: {
          id: "receitastop"
        }
      },
      {
        params: {
          id: "nbastats"
        }
      }
    ],
    fallback: "blocking"
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params;

  const img = `/img/Apps/${id}.jpg`;
  let github, text, site;
  if (id == "pokeagenda") {
    github = "https://github.com/Victorb999/PokeAgenda";
    text = "Search every pokemon, types and generation.";
    site = "https://pokeagenda-8b318.web.app/";
  } else if (id == "lolzinho") {
    github = "https://github.com/Victorb999/LOLzinho";
    text = "Search all champions of League of legends";
    site = "https://lol-zinho.victorb999.vercel.app";
  } else if (id == "receitastop") {
    github = "https://github.com/Victorb999/ReceitasTopFront";
    text = "A project to calculate prices of recipe";
    site = "https://receitastop.vercel.app";
  } else if (id == "nbastats") {
    github = "https://github.com/Victorb999/nba-stats";
    text = "Project in Nextjs to search all NBA teams and players";
    site = "https://nba-stats-pi.vercel.app/";
  }

  const data = {
    id,
    img,
    github,
    text,
    site
  };

  return {
    props: {
      dataApp: data
    },
    revalidate: 10
  };
};

export default App;
