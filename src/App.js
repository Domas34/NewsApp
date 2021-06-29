import './App.sass';

import Toolbar from "./components/Toolbar/Toolbar";
import SearchResults from "./components/SearchResults/SearchResults";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Toolbar/>
      <Switch>
        <Route exact path='/'>
        </Route>
          <Route path='/search/:arguments'>
              <SearchResults/>
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
