import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ShoppingCartBody from './ShoppingCartBody';
import { useHistory } from 'react-router-dom';
import { DataStore } from '@aws-amplify/datastore';
import { StoreItems } from '../../models';

const ShoppingCart = ({handleShowClose, showCart, cart, setCart }) => {
  const history = useHistory();

  const clearCart = () => {
    setCart([]);
    handleShowClose();
  }

  const updateItem = async (id, qty) => {
    try {
        const original = await DataStore.query(StoreItems, id);
        const update = await DataStore.save(
          StoreItems.copyOf(original, updated => {
              updated.quantity = original.quantity - qty
          })
        );
        return update;
    } catch (err) {
        console.log(err);
        return (err);
    }
  }
  const checkOut = () => {
    cart.map((item) => {
      return updateItem(item.id, item.quantity); 
    });
    clearCart();
    history.push("/inventory")
  }
  return (
    <>
      <Modal show={ showCart } onHide={handleShowClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body><ShoppingCartBody cart={ cart }/></Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={clearCart}>Clear Cart</Button>
          <Button variant="primary" onClick={checkOut}>Checkout</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
 
export default ShoppingCart;