import './App.css';
import Data from './componant/header/data/Data';
import Header from './componant/header/Header';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Details from './componant/header/details/Details';

function App() {
  return (
          <div>
              <Header></Header>
              <Router>
                  <Switch>
                      <Route exact path="/">
                        <Data></Data>
                      </Route>

                      <Route path="/details/:key">
                        <Details></Details>
                      </Route>
                  </Switch>
              </Router>
              

          </div>
  );
}

export default App;
