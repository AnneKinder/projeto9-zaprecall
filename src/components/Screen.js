import logo from "/src/img/logo.png";
import setaplay from "/src/img/seta_play.png";
import setavirar from "/src/img/seta_virar.png";
import React from "react";
import styled from "styled-components";

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

function CardContent(props) {
  const { card, i, numberQ, question, answer } = props;

  let [changeText, setchangeText] = React.useState(numberQ);
  let [changeClass, setchangeClass] = React.useState("pergunta-fechada");
  let [changeIcon, setchangeIcon] = React.useState(setaplay);
  let [turnedCard, setturnedCard] = React.useState([]);

  function turnCard(card, i) {
    setchangeClass("pergunta-aberta");
    if (changeIcon === setaplay) {
      setchangeText(question);
      setchangeIcon(setavirar);
    }
    if (changeIcon === setavirar) {
      setchangeText(answer);
      setchangeIcon("");

      let turnedArray = [...turnedCard, card];
      setturnedCard(turnedArray);
      finalizarCard(card, i);
    }
  }

  function finalizarCard(card, i) {
   // console.log(card);
  //  console.log(i);


  
  }

  return (
    <div className={changeClass}>
      <p>{changeText}</p>
      <div className="icon-pergunta" onClick={() => turnCard(card, i)}>
        <img src={changeIcon} alt="" />
      </div>
    </div>
  );
}

export default function Screen() {
  return (
    <ScreenContainer>
      <LogoContainer>
        <img src={logo} alt="logo" />
        <h1> ZapRecall </h1>
      </LogoContainer>

      {cards.map((card, i) => (
        <CardContent
          numberQ={card.numberQ}
          question={card.question}
          answer={card.answer}
          card={card}
          i={i}
          key={i}
        />
      ))}

      <FooterConcluidos>
        <div className="container-botoes">
          <Button> Não lembrei </Button>
          <Button> Quase não lembrei </Button>
          <Button> Zap </Button>
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

  .pergunta-fechada {
    width: 300px;
    height: 35px;
    background-color: #ffffff;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .p {
      font-family: "Recursive";
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
      color: #333333;
    }
  }

  .pergunta-aberta {
    width: 300px;
    margin: 12px;
    padding: 15px;
    min-height: 100px;
    background: #ffffd5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: "Recursive";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .img {
      position: absolute;
      bottom: 10px;
      right: 10px;
    }
  }
`;

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
`;
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

  .container-botoes {
    display: flex;
    width: 80%;
    justify-content: space-between;
    margin: 20px;
  }
`;
const Button = styled.button`
  color: blue;
  width: 90px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffffff;
  background: blue;
  border-radius: 5px;
  border: 1px solid blue;
  padding: 5px;
  cursor: pointer;
`;
