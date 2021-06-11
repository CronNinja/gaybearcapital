import { withAuthenticator  } from '@aws-amplify/ui-react';
import { useHistory } from 'react-router';
const Login = () => {
   const history = useHistory();
   history.push("/");
    return (
        <div className="home">
        </div>
    );
}
 
export default withAuthenticator(Login);