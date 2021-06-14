import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const OrderItemsList = ({ orders }) => {
    return (
        <div className="item-list">
        {orders.map(i => (
          <div className="item-preview" key={i.id} >
            <h2>{ i.id.split("-")[0].toUpperCase() }</h2>
            <p>Status: { i.status }</p>
            <Row>
              <Col><Link to={`/inventory/${ i.id }`} >More Details</Link></Col>
            </Row>
          </div>
        ))}
      </div>
    );
}
 
export default OrderItemsList;