import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ShoppingCartBody from './ShoppingCartBody';
import { useHistory } from 'react-router-dom';
import { DataStore } from '@aws-amplify/datastore';
import { StoreItems, Order, OrderItems } from '../../models';
import { Auth } from 'aws-amplify';

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
  async function createOrderItem(item) {
    try {
      return await DataStore.save(new OrderItems({
        status: 'Order Item Initialized',
        price: item.price,
        quantity: item.quantity
      }));
    } catch (err) {
      console.log('error updating store items:', err);
    }
  }
  async function createOrder(u) {
    try {
      const order = await DataStore.save(new Order({
        username: u,
        status: 'Order Initialized',
        orderItemsO: []
      }));
      console.log(order);
    } catch (err) {
      console.log('error updating store items:', err);
    }
  }
  async function checkOut(){
    const u = Auth.user ? Auth.user.username : "";
    cart.map((item) => {
      return updateItem(item.id, item.quantity); 
    });
    await createOrder(u);
    //clearCart();
    //history.push("/inventory")
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