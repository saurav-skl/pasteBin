import "./App.css";
import Todopage from "./Components/Pages/Todopage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Show from "./Components/Pages/Show.jsx";
import { Grid } from "@material-ui/core";

function App() {
  return (
    <div className="">
      <Router>
        <Switch>
          <Route exact path="/">
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <Todopage />
              </Grid>
            </Grid>
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
