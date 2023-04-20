import { Link } from "react-router-dom";
import logo from "../images/ethereum.png"; // with import

export const Header = () => {
  return (
    <div className="my-2 d-flex justify-content-between fixed-top px-4 border-bottom">
      <div className="d-flex">
        <img src={logo} alt="..." height="36" className="pb-2" />

        <h2 className="fs-4 ms-2">Build private Ethereum Networks</h2>
      </div>

      <div>
        <Link to="/home" className="mx-3 text-decoration-none fs-6">
          Home
        </Link>
        <Link to="/networkList" className="mx-3 text-decoration-none fs-6">
          Networks
        </Link>
        <Link to="/transaction" className="mx-3 text-decoration-none fs-6">
          Transaction
        </Link>
        <Link to="/explorer" className="mx-3 text-decoration-none fs-6">
          Explorer
        </Link>
        <Link to="/balance" className="mx-3 text-decoration-none fs-6">
          Balance
        </Link>
        <Link to="/faucet" className="mx-3 text-decoration-none fs-6">
          Faucet
        </Link>
      </div>
    </div>
  );
};
