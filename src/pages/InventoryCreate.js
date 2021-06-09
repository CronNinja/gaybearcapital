import { withAuthenticator } from '@aws-amplify/ui-react';
import { API, graphqlOperation } from 'aws-amplify';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { createInventory } from '../graphql/mutations';
import { listInventorys } from '../graphql/queries';

const initialState = { name: '', description: '', size: '', price: '' }

const InventoryCreate = () => {
   const [formState, setFormState] = useState(initialState)
   const [inventorys, setInventorys] = useState([])

  useEffect(() => {
    fetchInventorys()
  }, [])

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value })
  }

  async function fetchInventorys() {
    try {
      const inventoryData = await API.graphql(graphqlOperation(listInventorys))
      const inventorys = inventoryData.data.listInventorys.items
      setInventorys(inventorys)
    } catch (err) { console.log('error fetching inventorys') }
  }

  async function addInventory() {
    try {
      if (!formState.name || !formState.description) return
      const inventory = { ...formState }
      setInventorys([...inventorys, inventory])
      setFormState(initialState)
      await API.graphql(graphqlOperation(createInventory, {input: inventory}))
    } catch (err) {
      console.log('error creating inventory:', err)
    }
  }

  return (
    <div className="form">
      <h2>GBC Inventory</h2>
      <input
        onChange={event => setInput('name', event.target.value)}
        value={formState.name}
        placeholder="Name"
      />
      <input
        onChange={event => setInput('description', event.target.value)}
        value={formState.description}
        placeholder="Description"
      />
      <input
        onChange={event => setInput('size', event.target.value)}
        value={formState.size}
        placeholder="Size"
      />
      <input
        onChange={event => setInput('price', event.target.value)}
        value={formState.price}
        placeholder="Price"
      />
      <Button onClick={addInventory}>Create Inventory</Button>
    </div>
  )
}
 
export default withAuthenticator(InventoryCreate);