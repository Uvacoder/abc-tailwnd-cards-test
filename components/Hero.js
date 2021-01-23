import React from 'react';

export default function Hero() {
  return (
    <div className="flex flex-col space-y-4">
      <h1 className="h1">TailwindCSS para Designers</h1>
      <p className="paragraph">
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
