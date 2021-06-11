import { DataStore } from '@aws-amplify/datastore';
import { StoreItems } from '../models';
import { useState, useEffect } from 'react';
import StoreItemsList from '../components/StoreItems/StoreItemsList';

const Inventory = ({ cart, setCart}) => {
   const [items, setItems] = useState([]);
  useEffect(() => {
    let mounted = true;
    fetchItems().then((items) => {
      if(mounted){
        setItems(items);
      }
    })
    return () => { mounted = false }
  })

  async function fetchItems() {
    try {
      const items = await DataStore.query(StoreItems);
      return items;
    } catch (err) {
      console.log('error fetching items');
      return [];
    }
  }


  return (
    <div className="home">
      <StoreItemsList items={ items } cart={ cart } setCart={ setCart } />
    </div>
  )
}
 
export default Inventory;