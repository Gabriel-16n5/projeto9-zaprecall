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
  width: 300px;
  height: 65px;
  background-color: #FFFFFF;
  box-sizing:border-box;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  padding-left: 15px;
  padding-right: 15px;
  margin-top:15px;
  margin-bottom:15px;
  display:flex;
  justify-content: space-between;
  align-items: center;
`

export const H3 = styled.h3`
  font-family: "Recursive";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: #333333;
`

export const IconPlay = styled.img`
  width: 20px;
  height: 23px;
`