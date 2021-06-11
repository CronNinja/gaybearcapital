import { DataStore } from '@aws-amplify/datastore';
import { StoreItems } from '../models';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { withAuthenticator  } from '@aws-amplify/ui-react';
const initialState = { name: '', description: '', size: '', type: 'misc', price: 0.00, quantity: 0 }

const InventoryCreate = () => {
   const [formState, setFormState] = useState(initialState);

  function setInput(key, value) {
    let v = value
    if(key === 'price' || key === 'quantity'){
      v = Number(value);
    }
    setFormState({ ...formState, [key]: v })
  }

  async function addItem() {
    try {
      if (!formState.name || !formState.description) return
      await DataStore.save(new StoreItems({ ...formState}));
      setFormState(initialState);
    } catch (err) {
      console.log('error updating store items:', err);
    }
  }

  return (
    <div className="form">
      <h2>Add to Item</h2>
      <label>Name</label>
      <input
        onChange={event => setInput('name', event.target.value)}
        value={formState.name}
        placeholder="Name"
      />
      <label>Description</label>
      <input
        onChange={event => setInput('description', event.target.value)}
        value={formState.description}
        placeholder="Description"
      />
      <label>Type</label>
        <select
          value={ formState.type }
          onChange={event => setInput('type', event.target.value)}
        >
          <option value="clothing">Clothing</option>
          <option value="misc">Misc</option>
        </select>
      {
        formState.type === 'clothing' &&
        <>
          <label>Size</label>
          <select
            value={ formState.size }
            onChange={event => setInput('size', event.target.value)}
          >
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            <option value="x-large">XL</option>
          </select>
        </>
      }
      <label>Price</label>
      <input
        type='number'
        step='0.01'
        onChange={event => setInput('price', event.target.value)}
        value={formState.price}
      />
      <label>Quantity</label>
      <input
        type="number"
        onChange={event => setInput('quantity', event.target.value)}
        value={formState.quantity}
        
      />
      <Button onClick={addItem}>Add Item</Button>
      </div>
  )
}
 
export default withAuthenticator(InventoryCreate);