import { useState, useEffect } from "react";
import { getBalance } from "./api";
export const Faucet = () => {
  const [cuenta, setCuenta] = useState(null);
  const [tx, setTx] = useState(null);
  const [balance, setBalance] = useState(null);
  useEffect(() => {
    window.ethereum &&
      window.ethereum
        .request({
          method: "eth_requestAccounts",
        })
        .then((cuentas) => {
          setCuenta(cuentas[0]);
          ethereum.on("accountsChanged", (cuentas) => {
            setCuenta(cuentas[0]);
          });
        });
  });

  async function invocarFaucet() {
    const url = `http://localhost:3333/faucet/address/${cuenta}`;
    const response = await fetch(url);
    const json = await response.json();
    setTx(json);
    queryBalance(cuenta);
  }
  async function queryBalance(address) {
    try {
      const data = await getBalance(address);
      setBalance(data.ethers);
    } catch (error) {}
  }
  return (
    <div>
      <div className="row my-4">
        <h4>FAUCET</h4>
      </div>
      <div className="text-center my-2 row">
        <div className="col"></div>
        <div className="col">
          <h5>Address: {cuenta}</h5>
          <button className="btn btn-primary" onClick={() => invocarFaucet()}>
            Send 0,1 ETH
          </button>
          {cuenta && tx && balance && (
            <div className="alert alert-success mt-2" role="alert">
              ETH SENDED! <br></br>
              {cuenta} balance is {balance} ETH
            </div>
          )}
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
};
