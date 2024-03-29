import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Chango&display=swap" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,300&display=swap" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css2?family=Honk&display=swap" rel="stylesheet" />
      <link rel="shortcut icon" href="favicon.png" type="image/png" />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
