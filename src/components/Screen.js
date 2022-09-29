//import logo from "/src/assets/img/logo.png";
import React from "react";

let closedQuestions = ["Pergunta 1", "Pergunta 2", "Pergunta 3", "Pergunta 4"];

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

export default function Screen() {
  let [cardClass, setcardClass] = React.useState("pergunta-fechada");
  //let [title, setTitle] = React.useState(closedQuestions[i])
  let [icon, setIcon] = React.useState("D")

  function TurnCard(title, i) {
    setcardClass("pergunta-aberta")
    
  }
//        

  return (
    <div className="screen-container">
      <div className="logo-container">
      {/* <img src={logo} alt="logo" /> */}
        <h1> ZapRecall </h1>
      </div>


      {closedQuestions.map((title, i) => (
        <div 
        className={cardClass} 
        key={i}
        index={i}
        icon={icon}>
          <p>{title}</p>
          <h2 onClick={() => TurnCard(title, i)}> {icon} </h2>
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
