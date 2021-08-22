import NavBar from './components/Nav/NavBar';
import Home from './pages/Home';
import { BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
import { useState } from 'react';


Amplify.configure(awsExports);

function App() {
  const [user, setUser] = useState({});
  return (
    <Router>
      <div className="App">
      <NavBar props={ { setUser, user } }/>
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;