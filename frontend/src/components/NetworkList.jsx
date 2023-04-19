import { useQuery, useMutation } from "react-query";
import { Link } from "react-router-dom";
import { useState } from "react";

const listaNetwork = async () => {
  const response = await fetch("http://localhost:3333/network");
  const datos = await response.json();
  return datos;
};

export const NetworkList = () => {
  const [mensaje, setMensaje] = useState("");

  const sendServer = async (network) => {
    console.log(network);
    const response = await fetch(`http://localhost:3333/network/${network}`, {
      method: "DELETE",
    });
    const datosResponse = await response.json();
    setMensaje(JSON.stringify(datosResponse));
    console.log(datosResponse);
  };
  const mutation = useMutation(sendServer);

  const { data, isLoading } = useQuery(["redes"], listaNetwork);

  const borrar = (network) => {
    console.log("network", network);
    mutation.mutate(network);
  };
  if (isLoading) return <p>Cargando</p>;
  return (
    <div>
      <h2>Lista de redes</h2>
      <div className="text-end">
        <Link to="/nuevaRed" className="btn btn-primary mx-2">
          + Añadir nueva red
        </Link>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Cadena</th>
            <th>Cadena Id</th>
            <th>Cuenta</th>
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
                <button className="btn btn-primary mx-2">
                  <i className="fa fa-eye me-2"></i>Ver nodos
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => borrar(item.numero)}
                >
                  <i className="fa fa-trash me-2"></i>Borrar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
