import NavBar from './components/NavBar';
import Home from './pages/Home';
import { BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import Inventory from './pages/Inventory';
import { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
Auth.configure(awsconfig);

function App() {

  return (
    <Router>
      <div className="App">
      <NavBar />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/inventory">
            <Inventory />
          </Route>
         </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;