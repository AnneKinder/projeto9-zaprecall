//import logo from "/src/img/logo.png";
import React from "react";
import styled from "styled-components"

let cards = [
  {
    numberQ: "Pergunta 1",
    question: "O que é JSX?",
    answer: "Uma extensão de linguagem do JavaScript"
  },
  {
    numberQ: "Pergunta 2",
    question: "O React é __",
    answer: "uma biblioteca JavaScript para construção de interfaces"
  },
  {
    numberQ: "Pergunta 3",
    question: "Componentes devem iniciar com __",
    answer: "letra maiúscula"
  },
  {
    numberQ: "Pergunta 4",
    question: "Podemos colocar __ dentro do JSX",
    answer: "expressões"
  },
  {
    numberQ: "Pergunta 5",
    question: "O ReactDOM nos ajuda __",
    answer: "interagindo com a DOM para colocar componentes React na mesma"
  },
  {
    numberQ: "Pergunta 6",
    question: "Usamos o npm para __",
    answer: "gerenciar os pacotes necessários e suas dependências"
  },
  {
    numberQ: "Pergunta 7",
    question: "Usamos props para __",
    answer: "passar diferentes informações para componentes "
  },
  {
    numberQ: "Pergunta 8",
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

function CardContent(props) {
  const { i, card, numberQ, question, answer } = props;

  let [changeText, setchangeText] = React.useState( numberQ );
  let [changeClass, setchangeClass] = React.useState("pergunta-fechada")
  let [changeIcon, setchangeIcon] = React.useState( "D" );
  let [changeClick, setchangeClick] = React.useState( "D" );



  function TurnCard() {
    setchangeClass("pergunta-aberta")
     if(changeIcon==="D"){
      setchangeText(question)
      setchangeIcon("R")
    } if (changeIcon==="R"){
      setchangeText(answer)
      setchangeIcon("")
    }
  }


  return (
    <div className={changeClass}>
      <p>{changeText}</p>
      <div className="icon-pergunta" onClick={() => TurnCard()}>
        {changeIcon}
      </div>
      <div className="icon-resposta hidden">R </div>
    </div>
  );
}



export default function Screen() {
  let [resposta, setResposta] = React.useState([]);

  function showAnswer(front, i, answer) {
    console.log(front);
    console.log(i);
    console.log(answer);
    let respostaMostrada = [...resposta, front];
    setResposta(respostaMostrada);
  }

  let [conteudo, setConteudo] = React.useState("question");

  return (
    <ScreenContainer>
      <LogoContainer>
        {/* <img src={logo} alt="logo" /> */}
        <h1> ZapRecall </h1>
      </LogoContainer>

      {cards.map((card, i) => (
        <CardContent
          numberQ={card.numberQ}
          question={card.question}
          answer={card.answer}
          card={card}
          i={i}
        />
      ))}

      <FooterConcluidos>
        <div className="container-botoes">
          <button> Não lembrei </button>
          <button> Quase não lembrei </button>
          <button> Zap </button>
        </div>
      </FooterConcluidos>
    </ScreenContainer>
  );
}


const ScreenContainer = styled.div`

  background-color: #fb6b6b;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;

`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 40px 0 20px 0;

  img {
    width: 52px;
  }

  h1 {
    font-family: "Righteous";
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    color: #ffffff;
    margin-left: 20px;
  }

`
const FooterConcluidos = styled.div`
  width: 100%;
  min-height: 50px;
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Recursive";
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  padding: 10px;

`
