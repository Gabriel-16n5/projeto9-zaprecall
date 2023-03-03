import styled from "styled-components";
import {MainContainer, Header, Img, H1, H2, Footer, H3, Pergunta, Button, Div} from "./AppStyle";
import logo from "../assets/logo.png";
import iconPlay from "../assets/seta_play.png";
import iconTurn from "../assets/seta_virar.png";
import iconCorrect from "../assets/icone_certo.png";
import React from "react";
import mock from "../mock";
let contador = 0;

function App() {
  const [concluidos, setConcluidos] = React.useState(`${contador}/8 CONCLUÍDOS`);
  const [iconQuestion, setIconQuestion] = React.useState(true);
  const [perguntaClicada, setPerguntaClicada] = React.useState([]);
  const [lendoPergunta, setLendoPergunta] = React.useState([]);

  function clicarPergunta(card, i){
    if(lendoPergunta.includes(card.question)){
      setLendoPergunta(card.answer)
    } else{
      setLendoPergunta(card.question)
    }
    setPerguntaClicada([...perguntaClicada, card])
  }
  console.log(lendoPergunta)
  return (
      <MainContainer >
        <Header>
          <Img src={logo} />
          <H1>ZapRecall</H1>
        </Header>
          <>
          {mock.map((card, i) => 
          <Pergunta key={i} onClick={() => clicarPergunta(card, i)} card={card} clicado={perguntaClicada.includes(card)}>
            <H3 >{perguntaClicada.includes(card) ? `${lendoPergunta}` : `Pergunta ${i+1}`}</H3>
            <img src={perguntaClicada.includes(card) ? `${iconTurn}` : `${iconPlay}`} />
            {/* Vou criar algum state aqui que vai ficar vazio, e só vai renderizar quando eu colocar algo aqui dentro */}
            {/* <Div>
              <Button cor={"#FF3030"}>Não lembrei</Button>
              <Button cor={"#FF922E"}>Quase não lembrei</Button>
              <Button cor={"#2FBE34"}>Zap!</Button>
            </Div> */}
          </Pergunta>)}
          </>
        <Footer>
          <H2>{concluidos}</H2>
        </Footer>
      </MainContainer>
  );
}



export default App;