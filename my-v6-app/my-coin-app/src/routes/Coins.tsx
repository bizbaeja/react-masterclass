import { useParams } from "react-router";
function Coins() {
  const params = useParams();
  console.log(params);
  return <h1>Coins</h1>;
}
export default Coins;
