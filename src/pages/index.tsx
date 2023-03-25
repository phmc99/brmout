import Head from 'next/head';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import About from '../components/About';
import People from '../components/People';
import Features from '../components/Features';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>BRmout Engenharia e Segurança do trabalho</title>
        <meta
          name="description"
          content="BRmout consultoria de engenharia e segurança do trabalho"
        />
      </Head>
      <NavBar />
      <Hero />
      <About />
      <People />
      <Features />
      <Footer />
    </>
  );
}
