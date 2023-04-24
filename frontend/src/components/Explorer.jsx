import { getBalance, getTx, getBlock, getLastBlock } from "./api";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
export function Explorer() {
  const [textSearch, setTextSearch] = useState("");
  const [typeSearch, setTypeSearch] = useState("");
  const [balance, setBalance] = useState(null);
  const [tx, setTx] = useState(null);
  const [block, setBlock] = useState(null);
  const [lastBlock, setLastBlock] = useState(0);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      textSearch: textSearch,
      typeSearch: typeSearch,
    },
  });

  useEffect(() => {
    console.log("use");
    queryLastBlock();
  }, []);

  function onSubmit(datos) {
    setTextSearch(datos.textSearch);
    setTypeSearch(datos.typeSearch);
    if (datos.typeSearch == 1) {
      queryBalance(datos.textSearch);
    }
    if (datos.typeSearch == 2) {
      queryTx(datos.textSearch);
    }

    if (datos.typeSearch == 3) {
      queryBlock(datos.textSearch);
    }
  }
  async function queryBalance(address) {
    try {
      const data = await getBalance(address);
      setBalance(data.ethers);
    } catch (error) {}
  }

  async function queryTx(tx) {
    try {
      const data = await getTx(tx);
      setTx(data);
    } catch (error) {}
  }
  async function queryBlock(block) {
    try {
      const data = await getBlock(block);
      setBlock(data);
    } catch (error) {}
  }

  async function queryLastBlock() {
    try {
      const data = await getLastBlock();
      console.log(data);
      setLastBlock(data);
    } catch (error) {}
  }

  return (
    <div>
      <div className="row  my-4">
        <div className="col">
          <h4>EXPLORER</h4>
        </div>
        <div className="col"></div>
        <div className="col  text-center pt-2 border border-info ">
          <p> Last Block {JSON.stringify(lastBlock.bloque)}</p>
        </div>
        <div className="col"></div>
      </div>
      <div className="row">
        <form className="input-group" onSubmit={handleSubmit(onSubmit)}>
          <div className="col-2 pe-2">
            <select className="form-control" {...register("typeSearch")}>
              <option value="1">Balance</option>
              <option value="2">Transaction</option>
              <option value="3">Block</option>
            </select>
          </div>
          <div className="col-8">
            <input
              {...register("textSearch")}
              type="text"
              className="form-control"
            ></input>
          </div>
          <div className="col-2">
            {" "}
            <span className="input-group-append">
              <button className="btn btn-outline-primary mx-3" type="submit">
                <i className="fa fa-search"></i>
              </button>
            </span>
          </div>
        </form>
      </div>
      <div className="row justify-content-center align-items-center col-auto">
        {typeSearch == 1 && (
          <div className="my-2">
            <p>
              {textSearch} address balance is {balance} ETH
            </p>
          </div>
        )}
        {typeSearch == 2 && (
          <div className="my-2">
            <h4>Transaction {textSearch}</h4>
            <pre>{JSON.stringify(tx, null, 2)}</pre>
          </div>
        )}
        {typeSearch == 3 && (
          <div className="my-2">
            <h4>Block {textSearch}</h4>
            <pre>{JSON.stringify(block, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
}
