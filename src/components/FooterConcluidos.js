import styled from "styled-components"
import counter from "./counter.js"


export default function FooterConcluidos() {
  return (
    <FooterConc data-identifier="flashcard-counter">
      <p data-identifier="flashcard-counter">{counter}</p>
    </FooterConc>
  );
}

const FooterConc = styled.div`
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
