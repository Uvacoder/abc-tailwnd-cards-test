import React from 'react';

export default function Topics() {
  return (
    <div className="flex flex-col space-y-4">
      <h2 className="h2">Feito para designers</h2>
      <p className="paragraph">
        A idéia aqui é compartilhar conhecimento sobre o framework para
        designers, expondo o racional por trás e como utiliza-lo de maneira
        prática, em português.
      </p>
      <div className="sm:grid sm:grid-cols-2 gap-6 flex flex-col">
        <div className="flex flex-col space-y-4">
          <div className="h-36 bg-gray-200 dark:bg-black rounded-md border border-gray-300 dark:border-gray-600"></div>
          <p className="paragraph">
            Utility Classes e separação de responsabilidade
          </p>
        </div>
        <div className="flex flex-col space-y-4">
          <div className="h-36 bg-gray-200 dark:bg-black rounded-md border border-gray-300 dark:border-gray-600"></div>
          <p className="paragraph">Constraint-based</p>
        </div>
        <div className="flex flex-col space-y-4">
          <div className="h-36 bg-gray-200 dark:bg-black rounded-md border border-gray-300 dark:border-gray-600"></div>
          <p className="paragraph">Setup Básico</p>
        </div>
        <div className="flex flex-col space-y-4">
          <div className="h-36 bg-gray-200 dark:bg-black rounded-md border border-gray-300 dark:border-gray-600"></div>
          <p className="paragraph">Customização</p>
        </div>
        <div className="flex flex-col space-y-4">
          <div className="h-36 bg-gray-200 dark:bg-black rounded-md border border-gray-300 dark:border-gray-600"></div>
          <p className="paragraph">Extraindo componentes</p>
        </div>
        <div className="flex flex-col space-y-4">
          <div className="h-36 bg-gray-200 dark:bg-black rounded-md border border-gray-300 dark:border-gray-600"></div>
          <p className="paragraph">Responsividade, Estados e Dark Mode</p>
        </div>
      </div>
    </div>
  );
}
