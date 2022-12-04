import styled from "styled-components";

interface CirecleProps {
  bgColor: string;
}

const Container = styled.div<CirecleProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
`;

function Circle({ bgColor }: CirecleProps) {
  return <Container bgColor={bgColor} />;
}

export default Circle;
