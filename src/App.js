import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { isWhiteSpaceLike } from "typescript";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: rgba(176, 179, 214);
}
`;

const Main = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 700px;
`;

const Title = styled.h1`
  color: black;
`;

const Input = styled.input`
  width: 200px;
  border-radius: 15px;
  padding: 6px;
  margin: 15px;
  text-align: center;
  color: black;
  font-size: 15px;
  background-color: rgba(255, 255, 255, 0.1);
`;

const Button = styled.button`
  display: flex;
  border-radius: 5px;
  width: 20px;
  height: 25px;
  color: black;
  align-items: center;
  cursor: pointer;
  text-align: center;
  justify-content; center;
  align-items: center;
  background-color: rgba(176, 179, 214);
  line-height: 50px;
  

  &:hover {
    background-color: rgba(176, 179, 214, 0.6);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
  gap: 20px;
`;

const Resultado = styled.h3`
  border-radius: 20%;
  color: white;
  margin: 10px;
  font-size: 25px;
`;

const GifContainer = styled.div`
  margin-left: 20px;
`;

export default function App() {
  const [primeiroValor, setPrimeiroValor] = useState();
  const [segundoValor, setSegundoValor] = useState();
  const [resultado, setResultado] = useState();
  const capturandoPrimeiroValor = (e) => {
    setPrimeiroValor(Number(e.target.value));
    console.log(e.target.value);
  };

  const capturandoSegundoValor = (e) => {
    setSegundoValor(Number(e.target.value));
    console.log(e.target.value);
  };

  const soma = () => {
    setResultado(primeiroValor + segundoValor);
  };

  const subtracao = () => {
    setResultado(primeiroValor - segundoValor);
  };

  const multiplicaçao = () => {
    setResultado(primeiroValor * segundoValor);
  };

  const divisao = () => {
    setResultado(primeiroValor / segundoValor);
  };
  return (
    <Main>
      <GlobalStyle />
      <Title>Calculadora</Title>
      <Input
        type="number"
        placeholder="Insira um número"
        onChange={capturandoPrimeiroValor}
      />
      <Input
        type="number"
        placeholder="Insira um número"
        onChange={capturandoSegundoValor}
      />
      <ButtonContainer>
        <Button onClick={soma}>+</Button>
        <Button onClick={subtracao}>-</Button>
        <Button onClick={multiplicaçao}>x</Button>
        <Button onClick={divisao}>/</Button>
      </ButtonContainer>
      <Resultado>{resultado}</Resultado>
      <GifContainer></GifContainer>
    </Main>
  );
}
