import CryptoList from "../components/CryptoList";
import UseFetch from "../components/UseFetch";

const Cryptos = () => {
    const { data: cryptos, isLoading, error } = UseFetch("https://coincodex.com/api/coincodex/get_coin/XRP");
    return (
        <div className="home">
            { isLoading && <div> Loading...</div> }
            { error && <div>{ error }</div>}
            { cryptos && <CryptoList cryptos={ cryptos }/> }

        </div>
    );
}
 
export default Cryptos;