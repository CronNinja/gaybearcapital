import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const StoreItemsList = ({ items }) => {
    return (
        <div className="item-list">
        {items.map(i => (
          <div className="item-preview" key={i.name} >
            <h2>{ i.name }</h2>
            <p>{ i.description }: ${ i.price }</p>
            <p>Quantity: { i.quantity }</p>
            <Row>
              <Col><Link to={`/inventory/${ i.id }`} >Order</Link></Col>
            </Row>
            <Row>
              <Col><Link to={`/inventory/create/${ i.id }`} >Update Inventory</Link></Col>
            </Row>
          </div>
        ))}
      </div>
    );
}
 
export default StoreItemsList;