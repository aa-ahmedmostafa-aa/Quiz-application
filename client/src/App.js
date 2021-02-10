import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Quiz from "./components/Quiz";
import { ResultScreen } from "./screens";

function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/quiz" component={Quiz} />
            <Route path="/resultScreen" component={ResultScreen} />
            
          </Switch>
      </div>
    </Router>
  );
}

export default App;
