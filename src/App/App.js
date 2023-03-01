import styled from "styled-components";
import {MainContainer, Header, Img, H1, H2, Footer, H3, IconPlay, Pergunta} from "./AppStyle";
import logo from "/home/gabriel16n5/Desktop/projetinhos/projeto9-zaprecall/src/assets/logo.png";
import iconPlay from "/home/gabriel16n5/Desktop/projetinhos/projeto9-zaprecall/src/assets/seta_play.png";
import React from "react";

function App() {
  const [concluidos, setConcluidos] = React.useState("0/8 CONCLUÍDOS");
  return (
      <MainContainer >
        <Header>
          <Img src={logo} />
          <H1>ZapRecall</H1>
        </Header>
          <>
          <Pergunta>
            <H3>Pergunta 1</H3>
            <IconPlay src={iconPlay} />
          </Pergunta>
          <Pergunta>
            <H3>Pergunta 1</H3>
            <IconPlay src={iconPlay} />
          </Pergunta>
          <Pergunta>
            <H3>Pergunta 1</H3>
            <IconPlay src={iconPlay} />
          </Pergunta>
          <Pergunta>
            <H3>Pergunta 1</H3>
            <IconPlay src={iconPlay} />
          </Pergunta>
          <Pergunta>
            <H3>Pergunta 1</H3>
            <IconPlay src={iconPlay} />
          </Pergunta>
          <Pergunta>
            <H3>Pergunta 1</H3>
            <IconPlay src={iconPlay} />
          </Pergunta>
          <Pergunta>
            <H3>Pergunta 1</H3>
            <IconPlay src={iconPlay} />
          </Pergunta>
          <Pergunta>
            <H3>Pergunta 1</H3>
            <IconPlay src={iconPlay} />
          </Pergunta>
          </>
        <Footer>
          <H2>{concluidos}</H2>
        </Footer>
      </MainContainer>
  );
}

export default App;

