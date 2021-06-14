import NavBar from './components/NavBar';
import Home from './pages/Home';
import { BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import Inventory from './pages/Inventory';
import Amplify,  { Hub }  from "aws-amplify";
import awsExports from "./aws-exports";
import InventoryCreate from './pages/InventoryCreate';
import StoreItem from './pages/StoreItem';
import InventoryUpdate from './pages/InventoryUpdate';
import { useState } from 'react';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import Login from './pages/Login';
import OrderHistory from './pages/OrderHistory'

Amplify.configure(awsExports);

function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState([]);

  const [user, setUser] = useState();

  const handleShowClose = () => setShowCart(false);
  const handleShowOpen = () => setShowCart(true);

  const listener = (data) => {
      switch (data.payload.event) {
          case 'signIn':
              console.log('user signed in');
              userHasAuthenticated(true);
              break;
          case 'signUp':
              console.log('user signed up');
              break;
          case 'signOut':
              console.log('user signed out');
              userHasAuthenticated(false);
              break;
          case 'signIn_failure':
              console.log('user sign in failed');
              break;
          case 'tokenRefresh':
              console.log('token refresh succeeded');
              break;
          case 'tokenRefresh_failure':
              console.log('token refresh failed');
              break;
          case 'configured':
              console.log('the Auth module is configured');
              break;
          default:
          
      }
  }

  Hub.listen('auth', listener);
  return (
    <Router>
      <div className="App">
      <NavBar isAuthenticated={ isAuthenticated } userHasAuthenticated={ userHasAuthenticated } handleShowOpen={ handleShowOpen } cart={ cart }/>
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login userHasAuthenticated={userHasAuthenticated} setUser={ setUser }/>
          </Route>
          <Route exact path="/inventory">
            <Inventory cart={ cart } setCart={ setCart }/>
          </Route>
          <Route exact path="/inventory/create">
            <InventoryCreate />
          </Route>
          <Route  path="/inventory/create/:id">
            <InventoryUpdate />
          </Route>
          <Route  path="/inventory/:id">
            <StoreItem />
          </Route>
          <Route  path="/account/orders">
            <OrderHistory user={ user } />
          </Route>
         </Switch>
         <ShoppingCart handleShowClose={ handleShowClose } showCart={ showCart } cart={ cart } setCart={ setCart }/>
      </div>
    </div>
    </Router>
  );
}

export default App;