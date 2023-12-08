import { motion } from "framer-motion";
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import styles from "./styles.module.css";
import { dataAppPage, Apps } from "../../data/appData";

type AppProps = {
  dataApp: Apps;
};

const App = ({ dataApp }: AppProps) => {
  return (
    <div className={styles.all}>
      <div className={styles.container}>
        <motion.img
          src={dataApp.img}
          layoutId={`${dataApp.id}-app`}
          className={styles.img}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.5 }}
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
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.keys(dataAppPage).map((id) => ({
    params: {
      id,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}: {
  params: { id: string };
}) => {
  const { id } = params;

  const app = dataAppPage[id];

  return {
    props: {
      dataApp: app,
    },
    revalidate: 10,
  };
};

export default App;
