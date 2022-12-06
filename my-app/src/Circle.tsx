// import { useState } from "react";
import styled from "styled-components";
//interface 란 object shape 을 TS 에 설명해주는 TS의 개념
//const x = (a:number, b:number) => a+b TS 에게 변수 ab의 타입을 설명해줬었다면,
//interface NameProps{ attrs: type; } 이런식으로 설명해준다
interface ContainerProps {
  bgColor: string;
  borderColor?: string;
}
const Container = styled.div<ContainerProps>`
  box-sizing: border-box;
  padding: 10px;
  margin: 20px;

  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
  border-color: 10px solid ${(props) => props.borderColor};
`;

interface CircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}
//bgcolor 가 CircleProps 임을 선언해준다.
function Circle({ bgColor, borderColor, text = "기본 값" }: CircleProps) {
  // useState 의 초기값 타입이 될 수 있는 것을  아래와 같이 지정해준다.
  // const [counter, setCounter] = useState<number | string>(0);
  // setCounter("안녕하십니까 하하");
  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      {text}
    </Container>
  );
} //cba

export default Circle;
