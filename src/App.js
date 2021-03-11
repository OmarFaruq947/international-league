import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Details from './components/Details/Details';
import NoMatch from './components/NoMatch/NoMatch';

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route path="/Home">
           <Home></Home>
        </Route>
        <Route exact path="/">
           <Home></Home>
        </Route>
        <Route path="/Details/:idLeague">
           <Details></Details>
        </Route>
        <Route path="*">
          <NoMatch></NoMatch>
        </Route>
      </Switch>
    </Router>
    </div>
  );
}
export default App;
