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
          Para entender a idéia por trás do Tailwind, é preciso entender a linha
          de raciocínio que culminou em sua criação. Este artigo será
          basicamente uma re-leitura do original escrito por Adam Watham,
          criador do framework. Adam escreveu o artigo Utility Classes and
          Separations of Concerns antes de lançar a primeira versão do Tailwind
          e será através deste que entenderemos o significado de utility classes
          e separação de responsabilidade.
        </p>
        <h2 className="h2">Escrevendo CSS semântico</h2>
        <p className="paragraph">
          Uma das grandes preocupações quando se escrevia CSS puro era separar
          decisões de UI do conteúdo que o componente acomodaria. Ou seja,
          quando escrevendo HTML, deveríamos atribuir a classe do elemento um
          nome que expressaria o contexto deste:
        </p>
        <div className="w-full bg-gray-200 rounded-md p-8 dark:bg-gray-800">
          <div className="p-4 bg-white shadow-md rounded-md font-semibold">
            R$ 500,00
          </div>
        </div>
        <Code code={`<div class="ganhos">R$ 500,00</div>`} language="html" />
        <p className="paragraph">
          Ao ver este pedaço de código, saberíamos que essa div terá o estilo
          declarado na classe ganhos. Dessa forma, o CSS poderia ser algo como:
        </p>
        <Code
          code={`.ganhos {
	padding: 8px;
	background-color: white;
    box-shadow: 10px 5px 5px 0.3;
    border-radius: 0.375rem;
    font-size: 12px;
    font-weight: 600;
}`}
          language="css"
        />
        <p className="paragraph">
          Poderiamos até ter um exemplo mais robusto disso declarando na mesma
          classe os diversos estilos que diversos elementos dentro de um
          componente tem. Seguirei com o exemplo do card.
        </p>
        <div className="w-full bg-gray-200 rounded-md p-8 dark:bg-gray-800">
          <div className="p-4 bg-white shadow-md rounded-md">
            <p className="font-semibold">R$ 500,00</p>
            <p className="text-sm text-gray-500">Saldo na conta</p>
          </div>
        </div>
        <Code
          code={`<div class="ganhos">
	<h1>R$ 500,00</h1>
	<p>Saldo na conta</p>
</div>`}
          language="html"
        />
        <Code
          code={`.ganhos {
	padding: 8px;
	background-color: white;
    box-shadow: 10px 5px 5px 0.3;
    border-radius: 0.375rem;
    > h1 {
      font-size: 12px;
      font-weight: 600;
    }
    > p {
      font-size: 12px;
      font-weight: 500;
      font-color: #181818;
    }
  }
`}
          language="css"
        />
        <p className="paragraph">
          Parece bom, fácil de ler, não? Você consegue identificar em cada
          componente as decisões de UI que foram feitas em cada elemento. Só que
          o lado ruim aqui é que só parece que separamos as responsabilidades.
          <br />
          <br />
          Com essa abordagem, o HTML está livre do CSS, não está preocupado com
          decisões de design. Mas o CSS está totalmente vinculado ao HTML.
          Perceba que você basicamente vê a mesma estrutura de elementos no CSS
          com o acoplamento de estilos em uma só classe.
        </p>
        <h2 className="h2">Extraindo estilos da estrutura</h2>
        <Divider />
        <Footer />
      </div>
    </div>
  );
}
