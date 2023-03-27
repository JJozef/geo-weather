import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <body className='w-full text-white bg-black overflow-x-hidden'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
