import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/favicon.jpeg" />
        <meta name="description" content="A Pokedex developed using NextJS" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
