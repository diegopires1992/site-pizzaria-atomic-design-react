import {Switch,Route} from "react-router-dom";
import Home from "../components/organisms/home";
import Cardapio from "../components/organisms/cardapio";
const Routes = () => {
  return(
    <>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/Cardapio" component={Cardapio}/>
    </Switch>
    </>
  );
}

export default Routes;