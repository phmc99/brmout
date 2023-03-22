import Head from 'next/head';
import NavBar from '../components/NavBar';

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
    </>
  );
}
