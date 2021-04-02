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
          <p>{dataApp.github}</p>
          <p>{dataApp.text}</p>
          <p>{dataApp.site}</p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className={styles.back}
      >
        <Link href="/">
          <a>Voltar para a Home</a>
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
          id: "githubusers"
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
    text = "";
    site = "";
  } else if (id == "lolzinho") {
    github = "https://github.com/Victorb999/LOLzinho";
    text = "";
    site = "";
  } else if (id == "receitastop") {
    github = "https://github.com/Victorb999/ReceitasTopFront";
    text = "";
    site = "";
  } else if (id == "githubusers") {
    github = "https://github.com/Victorb999/GithubUsers";
    text = "";
    site = "";
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
