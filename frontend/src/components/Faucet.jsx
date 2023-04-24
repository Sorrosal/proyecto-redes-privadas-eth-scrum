import { useState, useEffect } from "react";

export const Faucet = () => {
  const [cuenta, setCuenta] = useState(null);
  const [tx, setTx] = useState(null);
  useEffect(() => {
    window.ethereum &&
      window.ethereum
        .request({
          method: "eth_requestAccounts",
        })
        .then((cuentas) => {
          setCuenta(cuentas[0]);
          window.ethereum.on("accountChanged", (cuentas) => {
            setCuenta(cuentas[0]);
          });
        });
  }, []);

  async function invocarFaucet() {
    const url = `http://localhost:3333/faucet/address/${cuenta}`;
    console.log(url);
    const response = await fetch(url);
    const json = await response.json();
    setTx(json);
  }

  return (
    <div>
      <div className="row my-4">
        <h4>FAUCET</h4>
      </div>
      <div className="text-center my-2 row">
        <div className="col"></div>
        <div className="col">
          <h4>Address: {cuenta}</h4>
          <button className="btn btn-primary" onClick={() => invocarFaucet()}>
            Send 0,1 ETH
          </button>
          {cuenta && tx && <div>{JSON.stringify(tx, null, 4)}</div>}
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
};
