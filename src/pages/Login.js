import { withAuthenticator  } from '@aws-amplify/ui-react';
import { useHistory } from 'react-router';
const Login = ({userHasAuthenticated}) => {
   const history = useHistory();
   userHasAuthenticated(true);
   history.push("/");
    return (
        <div className="home">
        </div>
    );
}
 
export default withAuthenticator(Login);