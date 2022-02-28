import Document, { Head, Html, Main, NextScript } from 'next/document';

// import packageJson from '../package.json';

class CustomDocument extends Document {
  render = () => (
    <Html lang="en">
      <Head>
        <meta name="theme-color" content="#000000" />
        {/* <meta name="build version" content={packageJson.} /> */}
        {/* <link rel="icon" href="/images/logo.png" /> */}
        <link rel="preload" href="/public/fonts/kremlin.ttf" as="font" crossOrigin="anonymous" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default CustomDocument;
