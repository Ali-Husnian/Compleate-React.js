import Navbare from "./Navbare";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const links = "https//:www.google.com";
  const title = "first app";
  const authname = "sir hader bahi";
  return (
    <Router>
      <div className="App">
        <Navbare />
        <div className="content">
          <Switch>
            <Route path="">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
