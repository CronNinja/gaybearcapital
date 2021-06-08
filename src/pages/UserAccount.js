import { useState } from "react";
import { Col, Row, Button } from "react-bootstrap";
import { useHistory } from 'react-router-dom';

const UserAccount = ( { user, stateHandler, setBaseUser }) => {
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        fetch("http://159.89.224.58/users/" + user.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: user.username,
                name: user.name,
            })
        }).then(() => {
            console.log("Updated: User");
            setIsLoading(false);
            history.push("/");
        })

    }
    const handleDelete = () => {
        fetch("http://159.89.224.58/users/" + user.id, {
            method: 'DELETE'
        }).then(() => {
            console.log("Deleted: User");
            setIsLoading(false);
            setBaseUser();
            history.push("/");
        })
    }
    return (
        <div className="form">
            <h2>Update New User</h2>
            <form>
                <label>Username</label>
                <input
                    type="text"
                    value={user.username}
                    disabled
                />
                <label>Name</label>
                <input
                    type="text"
                    value={user.name}
                    onChange={(e) => stateHandler({...user, name: e.target.value})}
                    required
                />
                { !isLoading &&
                    <div>
                        <Row>
                            <Col><Button variant="primary" onClick={ handleSubmit }>Update User</Button></Col>
                            <Col><Button variant="danger" onClick={ handleDelete }>Delete User</Button></Col>
                        </Row>
                    </div>
                }
                { isLoading && <p>Loading...</p>}
            </form>
        </div>
    );
}
 
export default UserAccount;