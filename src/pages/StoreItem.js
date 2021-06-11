import { useParams } from "react-router";
import { DataStore } from '@aws-amplify/datastore';
import { StoreItems } from '../models';
import { useState, useEffect } from 'react';
import StoreItemDetail from "../components/StoreItems/StoreItemDetail";

const StoreItem = () => {
    const { id } = useParams();
    const [item, setItem] = useState([]);

    useEffect(() => {
        let mounted = true;
        fetchItem().then((items) => {
          if(mounted){
            setItem(items);
          }
        })
        return () => { mounted = false }
      })
  
    async function fetchItem() {
      try {
        const item = await DataStore.query(StoreItems, id);
        return item;
      } catch (err) {
          console.log('error fetching item');
          return [];
        }
    }
  
    return (
        <div className="item-details">
            { item && <StoreItemDetail item={ item } /> }
        </div>
    );
}
 
export default StoreItem;