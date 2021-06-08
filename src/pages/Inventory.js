import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

const Inventory = () => {
    return (
        <div className="home">
            <AmplifySignOut />
            <h2>Inventory</h2>
        </div>
    );
}
 
export default withAuthenticator(Inventory);