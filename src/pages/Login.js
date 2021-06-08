import { useState } from "react";
import { useHistory } from 'react-router-dom';
import { Button } from "react-bootstrap";

const Login = ({ stateHandler }) => {
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        fetch("http://159.89.224.58/auth/local", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "identifier": username,
                "password": password
            })
        }).then(response => response.json())
        .then((data) => {
            console.log(data);
            setIsLoading(false);
            stateHandler({...data.user, loggedIn: true });
            history.push("/");
        })
    }
    return (
        <div className="home">
            <div className="form">
                <h2>Login</h2>
                <form>
                <label>Username</label>
                    <input
                        type="text"
                        value={ username }
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        minLength="8"
                        required
                    />
                    { !isLoading && <Button onClick={ handleSubmit }>Login</Button> }
                    { isLoading && <p>Loading...</p> }
                </form>
            </div>
        </div>
    );
}
 
export default Login;