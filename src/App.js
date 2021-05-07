import "./App.css";
import Todopage from "./Components/Pages/Todopage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Show from "./Components/Pages/Show.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Todopage />
          </Route>
          <Route path="/api/:id">
            <Show />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
