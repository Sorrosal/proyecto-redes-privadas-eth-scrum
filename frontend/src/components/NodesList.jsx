import { useQuery, useMutation } from "react-query";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const listaNodes = async (numero) => {
  const numeroRed = numero.substring(3);
  const response = await fetch(
    `http://localhost:3333/network/procesos/${numeroRed}`
  );
  const data = await response.json();
  return data;
};

export const NodesList = () => {
  const { numero } = useParams();
  const { data, isLoading } = useQuery(["data"], () => listaNodes(numero));
  const sendServer = async (network, node) => {
    console.log(network);
    console.log(node);
    const response = await fetch(
      `http://localhost:3333/network/${network}/${node}`,
      {
        method: "DELETE",
      }
    );
    const datosResponse = await response.json();
    setMensaje(JSON.stringify(datosResponse));
  };

  const borrar = (network, node) => {
    sendServer(network, node);
  };
  if (isLoading) return <p>Loading</p>;
  return (
    <div>
      <h4 className="my-4">NODES FROM NETWORK {numero}</h4>
      <div className="text-end">
        <Link to={`/nuevoNodo/${numero}`} className="btn btn-primary mx-2">
          + Add node
        </Link>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>CHAIN ID</th>
            <th>NODE FOLDER</th>
            <th>NETWORK FOLDER</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.nodo.chainId}</td>
              <td>{item.nodo.dir_node}</td>
              <td>{item.nodo.network_dir}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => borrar(item.nodo.network, item.nodo.nodo)}
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
