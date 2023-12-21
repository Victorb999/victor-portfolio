import { LayoutGroup } from "framer-motion";

import "../styles/globals.css";

import Layout from "../components/Layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <LayoutGroup>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LayoutGroup>
  );
}

export default MyApp;
