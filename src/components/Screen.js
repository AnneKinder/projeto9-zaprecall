import React from "react";
import styled from "styled-components";
import cards from "./cards.js"
import LogoContainer from "./LogoContainer.js"
import FooterConcluidos from "./FooterConcluidos"
import CardContent from "./CardContent"


export default function Screen() {
  return (
    <ScreenContainer>
      <LogoContainer/>

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

      <FooterConcluidos/>
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