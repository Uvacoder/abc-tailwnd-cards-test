import { NextSeo } from 'next-seo';
import Divider from '../components/Divider';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import MadeBy from '../components/MadeBy';
import MoreAbout from '../components/MoreAbout';
import Navbar from '../components/Navbar';
import Topics from '../components/Topics';

export default function Home() {
  return (
    <div className="global-wrapper">
      <div className="h-1 bg-yellow-400 w-full mb-4"></div>
      <NextSeo
        title="TailwindCSS para Designers"
        canonical="https://daniloleal.co/coming-soon"
        openGraph={{
          url: 'https://daniloleal.co/coming-soon',
          title: 'TailwindCSS para Designers',
          images: [
            {
              url: 'https://i.ibb.co/BVY8pLr/coming-soon.png',
              alt: 'TailwindCSS para Designers',
              width: 1280,
              height: 720,
            },
          ],
        }}
      />
      <div className="default-container">
        <Navbar />
        <Hero />
        <Divider />
        <Topics />
        <Divider />
        <MoreAbout />
        <Divider />
        <MadeBy />
        <Divider />
        <Footer />
      </div>
    </div>
  );
}
