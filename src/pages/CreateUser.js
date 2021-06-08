import { useState } from "react";
import { Button } from "react-bootstrap";
import { useHistory } from 'react-router-dom';

const CreateUser = ({ user, stateHandler }) => {
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({
        password: "",
        confirmPassword: ""
    });
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        fetch("http://strapi.gaybear.capital/auth/local", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: user.username,
                name: user.name,
                password: user.password,
            })
        }).then(response => response.json())
        .then((data) => {
            console.log("Created: User");
            setIsLoading(false);
            stateHandler({...user, loggedIn: true, id: data.id})
            history.push("/");
        })
    }
    const validate = () => {
        if (typeof(user.password) !== "undefined" && typeof(confirmPassword) !== "undefined") {    
            if (user.password !== confirmPassword) {
                setErrors({...errors, confirmPassword: "Passwords do not match!"})
            }
            else setErrors({});
        }
    }
    return (
        <div className="form">
            <h2>Create New User</h2>
            <form>
            <label>Username</label>
                <input
                    type="text"
                    value={user.username}
                    onChange={(e) => stateHandler({...user, username: e.target.value})}
                    minLength="4"
                    required
                />
                <label>Name</label>
                <input
                    type="text"
                    value={user.name}
                    onChange={(e) => stateHandler({...user, name: e.target.value})}
                    required
                />
                <label>Password</label>
                <input
                    type="password"
                    value={user.password}
                    onChange={(e) => stateHandler({...user, password: e.target.value})}
                    onBlur={ validate }
                    minLength="8"
                    required
                />
                {
                    errors.password && <div className="error-text">{errors.password}</div>
                }
                <label>Confirm Password</label>
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    onBlur={ validate }
                    minLength="8"
                    required
                />
                {
                    errors.confirmPassword && <div className="password-error">{errors.confirmPassword}</div>
                }
                { !isLoading && <Button onClick={ handleSubmit }>Create User</Button> }
                { isLoading && <p>Loading...</p>}
            </form>
        </div>
    );
}
 
export default CreateUser;