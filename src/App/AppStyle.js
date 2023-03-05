import styled from "styled-components"

export const MainContainer = styled.div`
  max-width: 375px;
  height: 950px;
  background-color: #FB6B6B;
  display:flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  position: relative;
  min-height: 100vh;
  padding-bottom: 2.5rem;
  `
 export const Header = styled.header`
  display:flex;
  justify-content: center;
  align-items: center;
  box-sizing:border-box;
  padding-top:48px;
  padding-bottom:33px;
`
export const Img = styled.img`
  width: 52px;
  height: 60px;
  margin-right: 20px;
`
export const H1 = styled.h1`
  font-family: "Righteous";
  font-size: 36px;
  color: #FFFFFF;
`
export const Footer = styled.footer`
  width: 375px;
  height: 70px;
  background-color: #FFFFFF;
  display:flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
`

export const H2 = styled.h2`
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: #333333;
`

export const Pergunta = styled.div`
  width: ${props => props.clicado ? "299px" : "300px"};
  height: ${props => props.clicado ? "131px" : "65px"};
  background-color: ${props => props.clicado ? "#FFFFD4" : "#FFFFFF"};
  box-sizing:border-box;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: ${props => props.clicado ? "20px" : "0px"};
  margin-top:15px;
  margin-bottom:15px;
  display:flex;
  flex-direction: ${props => props.resposta ? "column" : "row"};
  justify-content: space-between;
  align-items: ${props => props.clicado ? "flex-start" : "center"};
  img {
    display: ${props => props.resposta ? "none" : ""};
    width: ${props => props.clicado ? "30px" : "20px"};
    height: ${props => props.clicado ? "20px" : "23px"};
    margin-top: ${props => props.clicado ? "80px" : ""};
    border:none;
  }
  span {
    display: ${props => props.resposta ? "none" : ""};
  }
`

export const H3 = styled.h3`
  font-family: "Recursive";
  font-style: normal;
  font-weight: ${props => props.clicado ? "400" : "700"};
  font-size: ${props => props.clicado ? "18px" : "16px"};
  /* botão verde */
  text-decoration-line: ${props => props.acertou === true ? "line-through" : "none"};
  text-decoration-color: ${props => props.acertou === true ? "#2FBE34" : "#333333"};
  color: ${props => props.acertou === true ? "#2FBE34" : "#333333"};
  /* botão laranja */
  text-decoration-line: ${props => props.tipoResposta === null && "line-through"};
  text-decoration-color: ${props => props.tipoResposta === null && "#FF922E"};
  color: ${props => props.tipoResposta === null && "#FF922E"};
  /* botão vermelho */
  text-decoration-line: ${props => props.tipoResposta === false ? "line-through" : ""};
  text-decoration-color: ${props => props.tipoResposta === false ? "#FF3030" : ""};
  color: ${props => props.tipoResposta === false ? "#FF3030" : ""};
`

export const H4 = styled.h4`
  font-family: "Recursive";
  font-style: normal;
  font-weight: ${props => props.clicado ? "400" : "700"};
  font-size: ${props => props.clicado ? "18px" : "16px"};
  /* botão verde */
  text-decoration-line: ${props => props.acertou === true ? "line-through" : "none"};
  text-decoration-color: ${props => props.acertou === true ? "#2FBE34" : "#333333"};
  color: ${props => props.acertou === true ? "#2FBE34" : "#333333"};
  /* botão laranja */
  text-decoration-line: ${props => props.tipoResposta === null && "line-through"};
  text-decoration-color: ${props => props.tipoResposta === null && "#FF922E"};
  color: ${props => props.tipoResposta === null && "#FF922E"};
  /* botão vermelho */
  text-decoration-line: ${props => props.tipoResposta === false ? "line-through" : ""};
  text-decoration-color: ${props => props.tipoResposta === false ? "#FF3030" : ""};
  color: ${props => props.tipoResposta === false ? "#FF3030" : ""};
`
 
export const Button = styled.button`
  background-color: ${props => props.cor };
  width: 85.17px;
  height: 37.17px;
  display:flex;
  justify-content:center;
  align-items:center;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400px;
  font-size: 12px;
  color: #FFFFFF;
  border-radius: 5px;
  border: none;
`

export const Div = styled.div`
  width: 270px;
  display:flex;
  flex-direction: row;
  box-sizing:border-box;
  padding-bottom: 10px;
  justify-content:space-between;
`