import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getBalance } from "./api";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
export function Balance() {
  const [balance, setBalance] = useState(null);
  const [address, setAddress] = useState("");

  useEffect(() => {
    setBalance(null);
    if (address != "" && address != null) {
      queryBalance(address);
    }
  }, [address]);

  const { register, handleSubmit } = useForm({
    defaultValues: { address: address },
  });
  async function queryBalance(address) {
    try {
      const data = await getBalance(address);
      setBalance(data.ethers);
    } catch (error) {}
  }

  function onSubmit(datos) {
    setAddress(datos.address);
  }

  return (
    <div>
      <div className="row my-2">
        <form className="input-group" onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("address")}
            type="text"
            placeholder="Introduzca la dirección de la que quiera obtener el balance"
            className="form-control"
          ></input>

          <span className="input-group-append">
            <button className="btn btn-outline-primary mx-3" type="submit">
              Buscar
            </button>
          </span>
        </form>
      </div>
      <div className="row justify-content-center align-items-center col-auto">
        {balance && address && (
          <p className="alert alert-succes bg-light">
            El balance la cuenta <b>{address}</b> es de <b>{balance} ETH</b>
          </p>
        )}
      </div>
    </div>
  );
}
