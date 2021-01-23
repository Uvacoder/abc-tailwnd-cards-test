import React from 'react';
import { NextSeo } from 'next-seo';
import AppBar from '../../components/AppBar';
import Code from '../../components/Code';
import Footer from '../../components/Footer';
import Divider from '../../components/Divider';

export default function UtilityClasses() {
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
        <AppBar path="/" />
        <p className="uppercase text-tiny tracking-wide font-semibold text-gray-500">
          Primeiro tópico
        </p>
        <h1 className="h1">Utility Classes e sepração de responsabilidade</h1>
        <p className="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <Code
          code={`<CaseHeader
title='About me'
summary={[
  <i>"I am the master of my fate, I am the captain of my soul"</i>,
  '― Invictus by William Ernest Henley',
]}
/>`}
          language="javascript"
        />
        <p className="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <Code
          code={`<CaseHeader
title='About me'
summary={[
  <i>"I am the master of my fate, I am the captain of my soul"</i>,
  '― Invictus by William Ernest Henley',
]}
/>`}
          language="javascript"
        />
        <Divider />
        <Footer />
      </div>
    </div>
  );
}
