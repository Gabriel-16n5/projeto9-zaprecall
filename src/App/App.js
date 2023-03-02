import styled from "styled-components";
import {MainContainer, Header, Img, H1, H2, Footer, H3, Pergunta} from "./AppStyle";
import logo from "../assets/logo.png";
import iconPlay from "../assets/seta_play.png";
import iconTurn from "../assets/seta_virar.png";
import iconCorrect from "../assets/icone_certo.png";
import React from "react";
import mock from "../mock";
let contador = 0;

function App() {
  const [concluidos, setConcluidos] = React.useState(`${contador}/8 CONCLUÍDOS`);
  const [iconQuestion, setIconQuestion] = React.useState();
  const [perguntaClicada, setPerguntaClicada] = React.useState([]);

  function turnCard(){
    setIconQuestion(iconTurn)
  }

  function clicarPergunta(card){
    setPerguntaClicada([...perguntaClicada, card])

  }
  return (
      <MainContainer >
        <Header>
          <Img src={logo} />
          <H1>ZapRecall</H1>
        </Header>
          <>
          {mock.map((card, i) => 
          <Pergunta key={i} onClick={() => clicarPergunta(card)}>
            <H3>Pergunta {i+1}</H3>
            <img src={perguntaClicada.includes(card) ? `${iconTurn}` : `${iconPlay}`} />
          </Pergunta>)}
          </>
        <Footer>
          <H2>{concluidos}</H2>
        </Footer>
      </MainContainer>
  );
}



export default App;