import { Col, Row } from "react-bootstrap";

const StoreItemDetail = ({ item }) => {
    return (
        <div className="item-details">
            { item && 
                <article>
                    <Row><h2>{ item.name }</h2></Row>
                    <Row><h3>{ item.description }</h3></Row>
                    <Row>
                        <Col>${ item.price } | Qty: { item.quantity }</Col>
                    </Row>
                    <Row>
                        
                    </Row>
                </article>
            }
        </div>
       
    );
}
 
export default StoreItemDetail;