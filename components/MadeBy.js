import React from 'react';
import MainLink from './MainLink';

export default function MadeBy() {
  return (
    <div className="flex flex-col space-y-6">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
        Feito por
      </h2>
      <div className="flex space-x-8">
        <img
          src="/eu-bg-yellow.jpg"
          alt=""
          className="w-16 h-16 rounded-full"
        />
        <div className="flex flex-col space-y-4">
          <p className="text-sm text-gray-700 dark:text-gray-400">
            Me chamo
            <span className="italic font-semibold px-2">Danilo Leal</span>e sou
            designer e explorador do mundo. Fuçador senior da internet, aprendo
            muito por aqui. Espero conseguir passar alguma coisa para você
            também :)
          </p>
          <MainLink
            text="Visitar meu site pessoal"
            path="https://daniloleal.co"
          />
        </div>
      </div>
    </div>
  );
}
