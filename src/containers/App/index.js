import "antd/dist/antd.css";
import "./index";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../Home";
import City from "../DetailCity&TypeCity/City"
import GlobalHeader from "../../Components/GlobalHeader";
import GlobalFooter from "../../Components/GlobalFooter";
import Detail from "../Detail/index";

import "./style.scss";
function App() {
  return (
    <div>
      <div>
        <GlobalHeader />
      </div>
      <div className="container">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/city" component={City} />
            <Route exact path="/detail" component={Detail} />
          </Switch>
        </Router>
      </div>
      {/* ========================Header =============================*/}
      <div className="globalFooter">
        <GlobalFooter />
      </div>
    </div>
  );
}

export default App;
