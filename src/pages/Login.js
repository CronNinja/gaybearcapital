import { withAuthenticator  } from '@aws-amplify/ui-react';
import { useHistory } from 'react-router';
import { Auth } from 'aws-amplify'
import { useEffect } from 'react';
const Login = ({userHasAuthenticated}) => {
   const history = useHistory();
   useEffect(() => {
    if(Auth.user){
        userHasAuthenticated(true);
        history.push("/");
    }
   }, [history, userHasAuthenticated])
    return (
        <div className="home">
        </div>
    );
}
 
export default withAuthenticator(Login);