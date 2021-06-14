import { withAuthenticator  } from '@aws-amplify/ui-react';
import { useHistory } from 'react-router';
import { Auth } from 'aws-amplify'
import { useEffect } from 'react';
const Login = ({ userHasAuthenticated, setUser }) => {
   const history = useHistory();
   useEffect(() => {
    if(Auth.user){
        userHasAuthenticated(true);
        setUser(Auth.user.username);
        history.push("/");
    }
   }, [history, userHasAuthenticated, setUser])
    return (
        <div className="home">
        </div>
    );
}
 
export default withAuthenticator(Login);