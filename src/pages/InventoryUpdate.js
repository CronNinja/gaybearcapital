import { DataStore } from '@aws-amplify/datastore';
import { StoreItems } from '../models';
import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from "react-router";
import { withAuthenticator  } from '@aws-amplify/ui-react';
import { useHistory } from 'react-router-dom';
const initialState = { name: '', description: '', size: '', type: 'misc', price: 0.00, quantity: 0 }

const InventoryUpdate = () => {
    const { id } = useParams();
    const [formState, setFormState] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const history = useHistory();
    
    useEffect(() => {
        let mounted = true;
        async function fetchItem() {
            try {
                const item = await DataStore.query(StoreItems, id);
                return item;
            } catch (err) {
                console.log('error fetching item');
                return [];
            }
    }
        fetchItem().then((items) => {
          if(mounted){
            setFormState(items);
          }
        })
        return () => { mounted = false }
      }, [id]);
  
    const updateItem = async () => {
        try {
            setLoading(true);
            const original = await DataStore.query(StoreItems, id);
            await DataStore.save(
                StoreItems.copyOf(original, updated => {
                    updated.name = formState.name
                    updated.description = formState.description
                    updated.size = formState.size
                    updated.type = formState.type
                    updated.price = formState.price
                    updated.quantity = formState.quantity
                })
            )
            history.push("/inventory");
        } catch (err) {
            setError(err);
        }

    }
    function setInput(key, value) {
        let v = value
        if(key === 'price' || key === 'quantity'){
        v = Number(value);
        }
        setFormState({ ...formState, [key]: v })
    }

    return (
        <>
        { error && <div><p className="error-text">{ error }</p></div>}
        {loading && <div>Loading...</div>}
        {!loading &&
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
                min="0"
            />
            <label>Quantity</label>
            <input
                type="number"
                onChange={event => setInput('quantity', event.target.value)}
                value={formState.quantity}
                min="0"
                
            />
            <Button onClick={updateItem}>Update Item</Button>
        </div>
        }
        </>
        
    )
}
 
export default withAuthenticator(InventoryUpdate);