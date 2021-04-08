import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <script
            src="https://kit.fontawesome.com/0b112405cf.js"
            crossOrigin="anonymous"
          ></script>
          <link rel="canonical" href="http://victoraraujo.com.br/" />
          <meta
            name="keywords"
            content="dev,developer,frontend,vue,vuejs,react,reactjs,next,nextjs,front-end"
          />
          <meta
            name="description"
            content="Victor Araújo is a dev who loves front-end"
          />
          <meta
            name="og:description"
            content="Victor Araújo is a dev who loves front-end"
          />
          <meta
            property="og:title"
            content="Victor Araújo - Front end Developer"
          />
          <meta name="robots" content="index, follow"></meta>
          <title>Victor Araújo</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
