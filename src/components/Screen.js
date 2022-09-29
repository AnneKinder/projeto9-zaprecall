import logo from "/src/img/logo.png";
import React from "react";

let cards = [
  {
    question: "O que é JSX?",
    answer: "Uma extensão de linguagem do JavaScript"
  },
  {
    question: "O React é __",
    answer: "uma biblioteca JavaScript para construção de interfaces"
  },
  {
    question: "Componentes devem iniciar com __",
    answer: "letra maiúscula"
  },
  {
    question: "Podemos colocar __ dentro do JSX",
    answer: "expressões"
  },
  {
    question: "O ReactDOM nos ajuda __",
    answer: "interagindo com a DOM para colocar componentes React na mesma"
  },
  {
    question: "Usamos o npm para __",
    answer: "gerenciar os pacotes necessários e suas dependências"
  },
  {
    question: "Usamos props para __",
    answer: "passar diferentes informações para componentes "
  },
  {
    question: "Usamos estado (state) para __ ",
    answer:
      "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
  }
];

let FRONT = ["Pergunta 1", "Pergunta 2", "Pergunta 3", "Pergunta 4"];

let QUESTIONS = [
  "O que é JSX?",
  "O React é __",
  "Componentes devem iniciar com __",
  "Podemos colocar __ dentro do JSX"
];

let ANSWERS = [
  "Uma extensão de linguagem do JavaScript",
  "uma biblioteca JavaScript para construção de interfaces",
  "letra maiúscula",
  "expressões"
];

export default function Screen() {
  let [clicadas, setClicadas] = React.useState([]);
  // let [cardClass, setcardClass] = React.useState("pergunta-fechada");
  // let [texto, setTexto] = React.useState("");

  function TurnCard(front, i) {
    //trocar o texto
    //trocar o ícone
    let clicadasArray = [...clicadas, front];
    setClicadas(clicadasArray);
  }

  return (
    <div className="screen-container">
      <div className="logo-container">
        <img src={logo} alt="logo" />
        <h1> ZapRecall </h1>
      </div>

      {FRONT.map((front, i) => (
        <div
          className={
            clicadas.includes(front) ? "pergunta-aberta" : "pergunta-fechada"
          }
        >
          <p>
            {FRONT[i]} {/*  {texto}  */}{" "}
          </p>
          <h2
            onClick={() => {
              TurnCard(front, i);
            }}
          >
            D
          </h2>
        </div>
      ))}

      <div className="footer-concluidos">
        <div className="container-botoes">
          <button> Não lembrei </button>
          <button> Quase não lembrei </button>
          <button> Zap </button>
        </div>
      </div>
    </div>
  );
}
