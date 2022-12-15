import Coin from "../src/screens/Coin";
import Coins from "../src/screens/Coins";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ReactQueryDevtools initialIsOpen={true} />
      <Routes>
        <Route path="/" element={<Coins />}></Route>
        <Route path="/:coinId/*" element={<Coin />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
