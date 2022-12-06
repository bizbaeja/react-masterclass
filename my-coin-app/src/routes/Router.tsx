import { BrowserRouter, Switch, Route } from "react-router-dom";
import Coin from "./Coin";
import Coins from "./Coins";
function Router() {
  <BrowserRouter>
    <Switch>
      <Route path="/:coinId"></Route>
      <Coin />
      <Route path="/"></Route>
      <Coins />
    </Switch>
  </BrowserRouter>;
}
export default Router;
