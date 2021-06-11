import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const StoreItemsList = ({ items, cart, setCart }) => {
  const addToCart = (item) => {
    console.log(item.price);
    let q = 1;
    const fCart = cart.filter((i) => {
        if(i.id === item.id){
            q += Number(i.quantity);
            return false;
        };
        return true;
    });
    setCart([...fCart, {
        name: item.name,
        quantity: q,
        price: item.price,
        id: item.id
        }
    ]);
    console.log(cart);
  }
    return (
        <div className="item-list">
        {items.map(i => (
          <div className="item-preview" key={i.name} >
            <h2>{ i.name }</h2>
            <p>{ i.description }: ${ i.price }</p>
            <p>Quantity: { i.quantity }</p>
            <Row>
              <Col><Link to={`/inventory/${ i.id }`} >More Details</Link></Col>
            </Row>
            <hr/>
            <Row>
              <Col><Link to={`/inventory/create/${ i.id }`} >Update Inventory</Link></Col>
              <Col><Button onClick={() => addToCart(i)}>Add to Cart</Button></Col>
            </Row>
          </div>
        ))}
      </div>
    );
}
 
export default StoreItemsList;