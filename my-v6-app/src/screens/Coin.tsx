import { useParams } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;
const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;
const Loader = styled.span`
  text-align: center;
`;
interface RouteParams {
  coinId: string;
}
interface LocationState {
  state: {
    name: string;
    rank: number;
  };
}

interface CoinInterface {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}
function Coin() {
  const [loading, setisLoading] = useState(true);
  const [coins, setCoins] = useState<CoinInterface[]>([]);
  const { coinId } = useParams();
  const { state } = useLocation() as LocationState;
  const [info, setInfo] = useState({});
  const [priceInfo, setPriceInfo] = useState({});
  useEffect(() => {
    (async () => {
      const infoData = await (
        await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
      ).json();
      const priceData = await (
        await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
      ).json();
      setInfo(infoData);
      setPriceInfo(priceData);
    })();
  }, []);
  return (
    <Container>
      <Header>
        <Title>{state.name}</Title>
      </Header>
      {loading ? <Loader>{state?.name || "Loading.."}</Loader> : null}
    </Container>
  );
}
export default Coin;
