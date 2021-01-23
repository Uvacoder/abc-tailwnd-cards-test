import React from 'react';
import MainLink from './MainLink';

export default function MadeBy() {
  return (
    <div className="flex flex-col space-y-6">
      <h2 className="h2">Feito por</h2>
      <div className="flex space-x-8">
        <img
          src="/eu-bg-yellow.jpg"
          alt=""
          className="w-16 h-16 rounded-full"
        />
        <div className="flex flex-col space-y-4">
          <p className="paragraph">
            Me chamo
            <span className="italic font-semibold px-1">Danilo Leal</span>e sou
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
