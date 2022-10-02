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
    let [mostrarBotoes, setmostrarBotoes] = React.useState("");
    let [textColor, setTextColor] = React.useState("#333333")
    let [lineThrough, setlineThrough] = React.useState("")
    
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
      }
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
      setTextColor("#FF3030");
      setlineThrough("line-through");
    }
  
    function endQuase(card) {
      setchangeClass("pergunta-fechada");
      setchangeText(card.numberQ);
      setmostrarBotoes("");
      setchangeIcon(almost);
      setTextColor("#FF922E");
      setlineThrough("line-through");
    }
  
    function endZap(card) {
      setchangeClass("pergunta-fechada");
      setchangeText(card.numberQ);
      setmostrarBotoes("");
      setchangeIcon(right);
      setTextColor("#2FBE34");
      setlineThrough("line-through");
    }
  
    return (
        <CardCont>
      <div className={changeClass}>
        <P cor={textColor} decoration={lineThrough}>{changeText}</P>
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

    & > img {
      position: absolute;
      bottom: 10px;
      right: 10px;
    }
  }
`;

const P = styled.p`
        width: 50%;
      font-family: "Recursive";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      color: ${props=>props.cor};
      text-decoration-line: ${props=>props.decoration};
      text-decoration-thickness: 3px;
      text-decoration-color: ${props=>props.cor};


`

const ContainerBotoes = styled.div`
  display: flex;
  width: 90%;
  height: 40px;
  justify-content: space-between;
  margin-top: 20px;
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
  border-radius: 5px;
  border: 1px solid #ffffd5;
  padding: 5px;
  margin: 2px;
  cursor: pointer;

  &:first-child{
    background-color: #FF3030;
  }

  &:nth-child(2){
    background-color: #FF922E;
  }

  &:last-child{
    background-color: #2FBE34;
  }
`;
