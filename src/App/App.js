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
  const [perguntaClicada, setPerguntaClicada] = React.useState([]);
  const [lendoPergunta, setLendoPergunta] = React.useState([]);
  const [botoes, setBotoes] = React.useState([]);

  function clicarPergunta(card, i){
    if(lendoPergunta.includes(card.question)){
      setLendoPergunta(card.answer)
      setBotoes([...botoes, card]);
    } else{
      setLendoPergunta(card.question)
    }
    setPerguntaClicada([...perguntaClicada, card])
  }

  function ImprimeBotoes(){
    return(
      <Div>     
      <Button cor={"#FF3030"}>Não lembrei</Button>
      <Button cor={"#FF922E"}>Quase não lembrei</Button>
      <Button cor={"#2FBE34"}>Zap!</Button>
      </Div>
    )

  }

  console.log(botoes)
  return (
      <MainContainer >
        <Header>
          <Img src={logo} />
          <H1>ZapRecall</H1>
        </Header>
          <>
          {mock.map((card, i) => 
          <Pergunta key={i} onClick={() => clicarPergunta(card, i)} card={card} clicado={perguntaClicada.includes(card)} resposta={botoes.includes(card)} >
            <H3 >{perguntaClicada.includes(card) ? `${lendoPergunta}` : `Pergunta ${i+1}`}</H3>
            <img  src={perguntaClicada.includes(card) ? `${iconTurn}` : `${iconPlay}`} />
            {botoes.includes(card) ? <ImprimeBotoes/> : ""}
          </Pergunta>)}
          </>
        <Footer>
          <H2>{concluidos}</H2>
        </Footer>
      </MainContainer>
  );
}



export default App;