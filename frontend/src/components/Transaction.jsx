import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { useForm } from "react-hook-form";

export function Transaction() {
  const [cuenta, setCuenta] = useState(null);
  const [txOk, setTxOk] = useState(null);
  const [txKo, setTxKo] = useState(null);
  const [addressTo, setAddressTo] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const { register, handleSubmit } = useForm({
    defaultValues: {
      addressTo: addressTo,
      cantidad: cantidad,
    },
  });
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
  async function onSubmit(datos) {
    pagar(datos);
  }
  async function pagar(datos) {
    const txParams = {
      to: datos.addressTo,
      from: cuenta,
      value: ethers.utils.parseEther(datos.cantidad.toString()).toHexString(),
    };
    try {
      const tx = await ethereum.request({
        method: "eth_sendTransaction",
        params: [txParams],
      });
      setTxOk(tx);
    } catch (error) {
      setTxKo(error);
    }
  }
  return (
    <div>
      <div className="row my-4">
        <h4>TRANSACTION</h4>
      </div>
      <div className="align-items-center justify-content-center text-center w-100 row mt-4">
        <div className="col-3"></div>
        <div className="col-6">
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              disabled
              value={cuenta ?? 0}
              placeholder="From"
              className="form-control"
            ></input>
            <input
              {...register("addressTo")}
              type="text"
              placeholder="To"
              className="form-control mt-2"
            ></input>

            <input
              {...register("cantidad")}
              type="number"
              placeholder="Cantidad"
              className="form-control my-2"
            ></input>
            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </form>
        </div>
        <div className="col-3"></div>

        {txOk && <p className="alert alert-succes">{txOk}</p>}
        {txKo && <p>{txKo}</p>}
      </div>
    </div>
  );
}
