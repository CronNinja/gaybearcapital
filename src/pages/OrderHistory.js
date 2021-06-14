import { DataStore } from '@aws-amplify/datastore';
import { withAuthenticator  } from '@aws-amplify/ui-react';
import { Order } from '../models';
import { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify'
import OrderItemsList from '../components/StoreItems/OrderItemList'

const OrderHistory = ({user}) => {
   const [orders, setOrders] = useState([]);
  useEffect(() => {
    let mounted = true;
    fetchOrders().then((orders) => {
      if(mounted){
        setOrders(orders);
      }
    })
    return () => { mounted = false }
  })

  async function fetchOrders() {
    try {
      let orders = {}
      if(Auth.user){
        orders = await DataStore.query(Order, i => i.username("eq", Auth.user.username));
      }
      return orders;
    } catch (err) {
      console.log('error fetching orders');
      return [];
    }
  }


  return (
    <div className="home">
      <OrderItemsList orders={ orders }/>
    </div>
  )
}
 
export default withAuthenticator(OrderHistory);