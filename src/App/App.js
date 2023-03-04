import {MainContainer, Header, Img, H1, H2, Footer, H3, Pergunta, Button, Div} from "./AppStyle";
import logo from "../assets/logo.png";
import iconPlay from "../assets/seta_play.png";
import iconTurn from "../assets/seta_virar.png";
import iconCorrect from "../assets/icone_certo.png";
import iconErrado from "../assets/icone_erro.png";
import iconQuase from "../assets/icone_quase.png";
import React from "react";
import mock from "../mock";
let contador = 0;

function App() {
  const [concluidos, setConcluidos] = React.useState(`${contador}/8 CONCLUÍDOS`);
  const [perguntaClicada, setPerguntaClicada] = React.useState([]);
  const [lendoPergunta, setLendoPergunta] = React.useState([]);
  const [botoes, setBotoes] = React.useState([]);
  const [tipoResposta, setTipoResposta] = React.useState();
  const [icon, setIcon] = React.useState(iconPlay);

  function clicarPergunta(card, i){
    if(lendoPergunta.includes(card.question)){
      setLendoPergunta(card.answer);
      setBotoes([...botoes, card]);
    } else{
      setLendoPergunta(card.question)
    }
    setPerguntaClicada([...perguntaClicada, card])
  }

  function ImprimeBotoes(){
    function botaoVerde(){
      setPerguntaClicada([])
      setBotoes([]);
      contador++;
      setConcluidos(`${contador}/8 CONCLUÍDOS`)
      setTipoResposta(true);
      setIcon(iconCorrect)
    }
    function botaoLaranja(){
      setPerguntaClicada([])
      setBotoes([]);
      contador++;
      setConcluidos(`${contador}/8 CONCLUÍDOS`)
      setTipoResposta(null);
      setIcon(iconQuase)
    }
    function botaoVermelho(){
      setPerguntaClicada([])
      setBotoes([]);
      contador++;
      setConcluidos(`${contador}/8 CONCLUÍDOS`)
      setTipoResposta(false);
      setIcon(iconErrado)
    }
    return(
      <Div>     
      <Button data-test="no-btn" onClick={botaoVermelho} cor={"#FF3030"}>Não lembrei</Button>
      <Button data-test="partial-btn" onClick={botaoLaranja} cor={"#FF922E"}>Quase não lembrei</Button>
      <Button data-test="zap-btn" onClick={botaoVerde} cor={"#2FBE34"}>Zap!</Button>
      </Div>
    )

  }
  return (
      <MainContainer >
        <Header>
          <Img src={logo} />
          <H1>ZapRecall</H1>
        </Header>
          <>
          {mock.map((card, i) => 
          <Pergunta data-test="flashcard" key={i} card={card} clicado={perguntaClicada.includes(card)} resposta={botoes.includes(card)} >
            <H3 data-test="flashcard-text" tipoResposta={tipoResposta} >{perguntaClicada.includes(card) ? `${lendoPergunta}` : `Pergunta ${i+1}`} </H3>
            <img data-test="play-btn" onClick={() => clicarPergunta(card, i)} src={perguntaClicada.includes(card) ? `${iconTurn}` : `${icon}`} alt="" />
            <span data-test="turn-btn" onClick={() => clicarPergunta(card, i)} ><img src={perguntaClicada.includes(card) ? `${iconTurn}` : `${iconPlay}`} alt="" /></span>
            {botoes.includes(card) ? <ImprimeBotoes/> : ""}
          </Pergunta>)}
          </>
        <Footer>
          <H2 data-test="footer" >{concluidos}</H2>
        </Footer>
      </MainContainer>
  );
}



export default App;