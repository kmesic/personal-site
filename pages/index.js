import Head from 'next/head'
import Banner from '../components/Banner';
import Introduction from '../components/Introduction';
import SocialLinks from '../components/SocialLinks';
import Background from '../components/Background';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Kenan Mesic</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <Background />

      <Banner>
        <Introduction />
        <SocialLinks />
      </Banner>

      <Footer />
    </div>
  )
}
