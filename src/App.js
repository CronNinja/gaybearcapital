import NavBar from './components/NavBar';
import Home from './pages/Home';
import { BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import Inventory from './pages/Inventory';
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
import InventoryCreate from './pages/InventoryCreate';
Amplify.configure(awsExports);

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
          <Route exact path="/inventory/create">
            <InventoryCreate />
          </Route>
         </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;