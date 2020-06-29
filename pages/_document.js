import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="fr">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="Content-Type" content="text/html" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta name="copyright" content="© vallordev" />
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Karla&display=swap"
            rel="stylesheet"
            as="font"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond&display=swap"
            rel="stylesheet"
            as="font"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Sorts+Mill+Goudy&display=swap"
            rel="stylesheet"
            as="font"
            crossOrigin=""
          />
          <script src="https://unpkg.com/smoothscroll-polyfill/dist/smoothscroll.min.js"></script>

          <script src="https://unpkg.com/smoothscroll-anchor-polyfill"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
          <style jsx global>{`
            html {
              --scroll-behavior: smooth;
              scroll-behavior: smooth;
            }
            body {
              margin: 0px;
              font-family: "Karla", sans-serif;
            }
            body::-webkit-scrollbar-track {
              background-color: #000;
            }

            body::-webkit-scrollbar {
              width: 15px;
              background-color: #000;
            }

            body::-webkit-scrollbar-thumb {
              background-color: #fff;
              border-radius: 10px;
            }
          `}</style>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
