import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import '@/styles/globals.css'
import localFont from 'next/font/local'

const myFont = localFont({ src: './cooper.otf' })

export default function App({ Component, pageProps }) {
  return (
    <main className={myFont.className}>
      {' '}
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </main>
  )
}
