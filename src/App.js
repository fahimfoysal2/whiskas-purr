import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import Successful from "./Pages/Successful/Successful";
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/successful">
            <Successful />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
