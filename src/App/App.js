// import styled from "styled-components";
import {MainContainer, Header, Img, H1, H2, Footer, H3, IconPlay, Pergunta} from "./AppStyle";
import logo from "../assets/logo.png";
import iconPlay from "../assets/seta_play.png";
import React from "react";
import mock from "../mock";
let contador = 0;

function App() {
  const [concluidos, setConcluidos] = React.useState(`${contador}/8 CONCLUÍDOS`);
  return (
      <MainContainer >
        <Header>
          <Img src={logo} />
          <H1>ZapRecall</H1>
        </Header>
          <>
          {mock.map((deck, i) => 
          <Pergunta>
            <H3>Pergunta {i+1}</H3>
            <IconPlay src={iconPlay} />
          </Pergunta>)}
          </>
        <Footer>
          <H2>{concluidos}</H2>
        </Footer>
      </MainContainer>
  );
}

export default App;