import { API, graphqlOperation } from 'aws-amplify';
import { useEffect, useState } from 'react';
import { listInventorys } from '../graphql/queries';

const Inventory = () => {
   const [inventorys, setInventorys] = useState([])

  useEffect(() => {
    fetchInventorys()
  }, [])

  async function fetchInventorys() {
    try {
      const inventoryData = await API.graphql(graphqlOperation(listInventorys))
      const inventorys = inventoryData.data.listInventorys.items
      setInventorys(inventorys)
    } catch (err) { console.log('error fetching inventorys') }
  }

  return (
    <div className="home">
      {
        inventorys.map((inventory, index) => (
          <div key={inventory.id ? inventory.id : index}>
            <p>{inventory.name}</p>
            <p >{inventory.description}</p>
          </div>
        ))
      }
    </div>
  )
}

 
export default Inventory;