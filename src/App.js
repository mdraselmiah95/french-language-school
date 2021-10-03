import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Activities from "./components/Activities/Activities";
import Courses from "./components/Courses/Courses";
import Error from "./components/Error/Error";
import Home from "./components/Home/Home";
import Life from "./components/Life/Life";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/courses">
            <Courses></Courses>
          </Route>
          <Route path="/life">
            <Life></Life>
          </Route>
          <Route path="/Activities">
            <Activities></Activities>
          </Route>
          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
