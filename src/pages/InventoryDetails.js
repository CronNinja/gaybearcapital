import { useParams } from "react-router";
import InventoryDetailsInfo from "../components/Inventory/InventoryDetailsInfo";
import UseFetch from "../components/UseFetch";

const InventoryDetails = ({ cart, setCart }) => {
    const { id } = useParams();
    const { data: inv, isLoading, error } = UseFetch("http://strapi.gaybear.capital/inventories/" + id);
    return (
        <div className="crypto-details">
            { isLoading && <div> Loading...</div> }
            { error && <div>{ error }</div> }
            { inv && <InventoryDetailsInfo inv={inv} cart={ cart } setCart={ setCart }/>}
        </div>
    );
}
 
export default InventoryDetails;