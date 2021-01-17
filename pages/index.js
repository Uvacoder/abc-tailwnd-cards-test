import Head from 'next/head';
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
