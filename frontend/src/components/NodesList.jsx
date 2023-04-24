import { useQuery } from "react-query";
import { useParams } from "react-router";

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

  if (isLoading) return <p>Loading</p>;
  return (
    <div>
      <h4 className="my-4">NODES FROM NETWORK {numero}</h4>

      <table className="table">
        <thead>
          <tr>
            <th>CHAIN ID</th>
            <th>NODE FOLDER</th>
            <th>NETWORK FOLDER</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.nodo.chainId}</td>
              <td>{item.nodo.dir_node}</td>
              <td>{item.nodo.network_dir}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
