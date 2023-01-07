import Head from 'next/head'
import Banner from '../components/Banner'
import Introduction from '../components/Introduction'
import SocialLinks from '../components/SocialLinks'
import Background from '../components/Background'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-2">
      <Head>
        <title>Kenan Mesic</title>
        <link rel="icon" href="/favicon.svg" />
        <meta property="og:title" content="Kenan Mesic" />
        <meta
          property="og:image"
          content="https://www.apple.com/v/iphone/home/t/images/home/og.png?201610171354"
        />
        <meta name="description" content="Kenan Mesic personal site" />
      </Head>

      <Background />
      <div className="flex-grow	flex flex-col items-center justify-center">
        <Banner>
          <Introduction />
          <SocialLinks />
        </Banner>
      </div>
      <Footer />
    </div>
  )
}
