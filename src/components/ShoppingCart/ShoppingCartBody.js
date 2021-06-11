import { Col, Row } from "react-bootstrap";
const ShoppingCartBody = ({ cart }) => {
    return (
        <div className="cart-body">
            
                {cart &&
                   cart.map((item) => {
                    return (
                    <Row key={item.id}>
                    <Col>
                            { item.name }
                        </Col>
                        <Col>
                            { item.quantity }
                        </Col>
                    </Row>
                   )})
                }
        </div>
    );
}
 
export default ShoppingCartBody;