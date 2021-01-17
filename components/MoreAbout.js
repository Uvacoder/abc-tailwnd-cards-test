import React from 'react';
import MainLink from './MainLink';

export default function MoreAbout() {
  return (
    <div className="flex flex-col space-y-4">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
        Mais sobre TailwindCSS
      </h2>
      <p className="text-sm text-gray-700 dark:text-gray-400">
        Felizmente, a documentação do Tailwind é uma das melhores por aí. E
        ainda, sua comunidade só cresce, enriquecendo o framework e
        estabilizando-o. Tailwind foi o framework que mais chamou atenção no
        State of CSS de 2020.
      </p>
      <MainLink text="Documentação oficial" />
      <MainLink text="Adam Watham (Criador)" />
      <MainLink text="Steve Schoreger (Designer)" />
      <MainLink text="Tailwind UI" />
    </div>
  );
}
