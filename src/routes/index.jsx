import {Switch,Route} from "react-router-dom";
import Home from "../components/organisms/home";
const Routes = () => {
  return(
    <>
    <Switch>
      <Route exact path="/" component={Home}/>
    </Switch>
    </>
  );
}

export default Routes;