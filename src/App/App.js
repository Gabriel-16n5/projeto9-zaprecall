import {MainContainer, Header, Img, H1, H2, Footer, H3, Pergunta, Button, Div, H4} from "./AppStyle";
import logo from "../assets/logo.png";
import iconPlay from "../assets/seta_play.png";
import iconTurn from "../assets/seta_virar.png";
import iconCorrect from "../assets/icone_certo.png";
import iconErrado from "../assets/icone_erro.png";
import iconQuase from "../assets/icone_quase.png";
import React from "react";
import mock from "../mock";
let contador = 0;
let sapo;

function App() {
  const [concluidos, setConcluidos] = React.useState(`${contador}/8 CONCLUÍDOS`);
  const [perguntaClicada, setPerguntaClicada] = React.useState([]);
  const [lendoPergunta, setLendoPergunta] = React.useState([]);
  const [mostraPergunta, setMostraPergunta] = React.useState([]);
  const [botoes, setBotoes] = React.useState([]);
  const [tipoResposta, setTipoResposta] = React.useState();
  const [icon, setIcon] = React.useState();
  const [inicio, setInicio] = React.useState([]);
  const [inicioIcon, setInicioIcon] = React.useState([]);
  const [iconVerde, setIconVerde] = React.useState([])
  const [pergun, setPergun] = React.useState([]);
  const [acertou, setAcertou] = React.useState(false)
  const [quase, setQuase] = React.useState([])
  const [errou, setErrou] = React.useState([])
  const [pipoca, setPipoca] = React.useState(false);
  const [visivel, setVisivel] = React.useState(true);


  function clicarPergunta(card, i){
    if(lendoPergunta.includes(card.question)){
      setLendoPergunta(card.answer);
      setBotoes([...botoes, card]);
      setMostraPergunta(card.question)
    } else{
      setLendoPergunta(card.question)
      setInicio(card.question)
      setPergun(card.question)
      setInicioIcon(card.question)
      setMostraPergunta(card.question)
    }
    setPerguntaClicada([...perguntaClicada, card])
    
  }

  function test(card){
    // if(tipoResposta === true){
    //   const attArray = [...iconVerde, card.question];
    //   const oi = [...acertou, card.question];
    //   setIconVerde(attArray);
    //   setAcertou(oi);
    //   console.log(oi);
    // }
    // console.log("oi")
    // setPipoca(card.question)
  }

  function ImprimeBotoes(card){
    sapo = card;
    function botaoVerde(){
      setPerguntaClicada([])
      setBotoes([]);
      contador++;
      setConcluidos(`${contador}/8 CONCLUÍDOS`)
      setTipoResposta(true);
      setIcon(iconCorrect)
      setInicio([])
      test(card);
      setPipoca(true)
      setAcertou(true)
      setVisivel(false)
    }
    function botaoLaranja(){
      setPerguntaClicada([])
      setBotoes([]);
      contador++;
      setConcluidos(`${contador}/8 CONCLUÍDOS`)
      setTipoResposta(null);
      setIcon(iconQuase)
      setInicio([])
    }
    function botaoVermelho(){
      setPerguntaClicada([])
      setBotoes([]);
      contador++;
      setConcluidos(`${contador}/8 CONCLUÍDOS`)
      setTipoResposta(false);
      setIcon(iconErrado)
      setInicio([])
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
          <Pergunta data-test="flashcard" key={i} card={card} clicado={perguntaClicada.includes(card)} resposta={botoes.includes(card)}  quase={quase.includes(card.question)} errou={errou.includes(card.question)} >
            {pergun.indexOf(card.question) ? <H3 data-test="flashcard-text"  >{`Pergunta ${i+1}`} </H3> : ""}
            {/* {acertou.includes(card.question) ? <H3 data-test="flashcard-text" acertou={acertou.includes(card.question)} >{`Perguntaa ${i+1}`} </H3> : ""}
            {quase.includes(card.question) ? <H3 data-test="flashcard-text" tipoResposta={tipoResposta} >{`Pergunta ${i+1}`} </H3> : ""}
            {errou.includes(card.question) ? <H3 data-test="flashcard-text" tipoResposta={tipoResposta} >{`Pergunta ${i+1}`} </H3> : ""} */}
            {inicio.includes(card.question) ? `${lendoPergunta}` : "" }
            {inicioIcon.indexOf(card.question)? <img data-test="play-btn" onClick={() => clicarPergunta(card, i)} src={iconPlay} alt="" /> : ""}
            {lendoPergunta.indexOf(card.question) ? "" : <img data-test="turn-btn" onClick={() => clicarPergunta(card, i)} src={perguntaClicada.includes(card) && `${iconTurn}`} alt="" />}
            {botoes.includes(card) ? <ImprimeBotoes card={card.question}/> : ""}
            {pipoca === false ? "" : <H4 data-test="flashcard-text" acertou={acertou === true} >{`Perguntaaa ${i+1}`} </H4>}
            {visivel === false && <span><img visivel={visivel === true} data-test="play-btn" src={icon} alt="" /></span>}
          </Pergunta>)}
          </>
        <Footer>
          <H2 data-test="footer" >{concluidos}</H2>
        </Footer>
      </MainContainer>
  );
}



export default App;