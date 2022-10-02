import React from "react";
import styled from "styled-components";
import setaplay from "../assets/img/seta_play.png";
import setavirar from "../assets/img/seta_virar.png";
import right from "../assets/img/icone_certo.png";
import wrong from "../assets/img/icone_erro.png";
import almost from "../assets/img/icone_quase.png";

export default function CardContent(props) {
    const { card, i, numberQ, question, answer } = props;
  
    let [changeText, setchangeText] = React.useState(numberQ);
    let [changeClass, setchangeClass] = React.useState("pergunta-fechada");
    let [changeIcon, setchangeIcon] = React.useState(setaplay);
    let [turnedCard, setturnedCard] = React.useState([]);
    let [mostrarBotoes, setmostrarBotoes] = React.useState("");
  
    function turnCard(card, i) {
      setchangeClass("pergunta-aberta");
      if (changeIcon === setaplay) {
        //mostrar pergunta
        setchangeText(question);
        setchangeIcon(setavirar);
      }
      if (changeIcon === setavirar) {
        //mostrar resposta
        setchangeText(answer);
        setchangeIcon("");
        setmostrarBotoes(InsertButton); // mostrar botoes
  
        let turnedArray = [...turnedCard, card]; //insere card na array de viradas
        setturnedCard(turnedArray);
        turnedAnswers(card, i);
      }
    }
  
    function turnedAnswers(card, i) {
      // console.log(card);
      //  console.log(i);
    }
  
    function InsertButton() {
      return (
        <>
          <Button onClick={() => endNao(card)}> Não lembrei </Button>
          <Button onClick={() => endQuase(card)}> Quase não lembrei </Button>
          <Button onClick={() => endZap(card)}> Zap </Button>
        </>
      );
    }
  
    function endNao(card) {
      setchangeClass("pergunta-fechada");
      setchangeText(card.numberQ);
      setmostrarBotoes("");
      setchangeIcon(wrong);
    }
  
    function endQuase(card) {
      setchangeClass("pergunta-fechada");
      setchangeText(card.numberQ);
      setmostrarBotoes("");
      setchangeIcon(almost);
    }
  
    function endZap(card) {
      setchangeClass("pergunta-fechada");
      setchangeText(card.numberQ);
      setmostrarBotoes("");
      setchangeIcon(right);
    }
  
    return (
        <CardCont>
      <div className={changeClass}>
        <p>{changeText}</p>
        <ContainerBotoes>{mostrarBotoes}</ContainerBotoes>
        <div className="icon-pergunta" onClick={() => turnCard(card, i)}>
          <img src={changeIcon} alt="" />
        </div>
      </div>
      </CardCont>
    );
  }


  const CardCont = styled.div`
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
      font-weight: 400;
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


const ContainerBotoes = styled.div`
  display: flex;
  width: 50px;
  height: 30px;
  justify-content: space-between;
  margin: 20px;
  `
const Button = styled.button`
  color: white;
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
  background: orange;
  border-radius: 5px;
  border: 1px solid yellow;
  padding: 5px;
  cursor: pointer;
`;
