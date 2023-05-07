import { useQuery, useMutation } from "react-query";
import { Link } from "react-router-dom";
import { useState } from "react";

const listaNetwork = async () => {
  const response = await fetch("http://localhost:3333/network");
  const datos = await response.json();
  return datos;
};

export const NetworkList = () => {
  const sendServer = async (network) => {
    const response = await fetch(`http://localhost:3333/network/${network}`, {
      method: "DELETE",
    });
    const datosResponse = await response.json();
  };
  const mutation = useMutation(sendServer);

  const { data, isLoading } = useQuery(["redes"], listaNetwork);

  const borrar = (network) => {
    mutation.mutate(network);
  };
  if (isLoading) return <p>Loading</p>;
  return (
    <div>
      <h4 className="my-4">NETWORKS</h4>
      <div className="text-end">
        <Link to="/nuevaRed" className="btn btn-primary mx-2">
          + Add network
        </Link>
      </div>

      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">NETWORK</th>
            <th scope="col">CHAIN ID</th>
            <th scope="col">ADDRESS</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.numero}</td>
              <td>{item.chainid}</td>
              <td>
                {item.cuentas.map((cuenta, index2) => (
                  <div key={index2}>{cuenta}</div>
                ))}
              </td>

              <td className="text-end">
                <Link
                  to={`/nodesList/${item.numero}`}
                  className="btn btn-primary mx-2"
                >
                  <i className="fa fa-eye me-2"></i>
                  View nodes
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => borrar(item.numero)}
                >
                  <i className="fa fa-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
