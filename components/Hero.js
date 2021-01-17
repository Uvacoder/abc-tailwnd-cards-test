import React from 'react';

export default function Hero() {
  return (
    <div className="flex flex-col space-y-4">
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
        TailwindCSS para Designers
      </h1>
      <p className="text-sm text-gray-700 dark:text-gray-400">
        Quem é designer sabe: gerenciar os estilos de uma aplicação pode não ser
        trivial. Na web, fazemos isso através do CSS. E, ao longo dos anos,
        muitos frameworks otimizaram essa tarefa mas, muitas vezes, ao custo de
        complicar a customização.
        <br />
        <br />
        TailwindCSS entra na equação para promover toda flexibilidade e
        autonomia dentro de um sistema de estilos já estruturado. Você toma
        decisões de design com uma lista curada de propriedades CSS,
        economizando muito trabalho no setup de um robusto design system.
      </p>
    </div>
  );
}
