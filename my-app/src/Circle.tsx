import styled from "styled-components";
//interface 란 object shape 을 TS 에 설명해주는 TS의 개념
//const x = (a:number, b:number) => a+b TS 에게 변수 ab의 타입을 설명해줬었다면,
//interface NameProps{ attrs: type; } 이런식으로 설명해준다

interface CircleProps {
  bgColor: string;
}
const Container = styled.div``;
function Circle({ bgColor }: CircleProps) {
  return <Container />;
}

export default Circle;
