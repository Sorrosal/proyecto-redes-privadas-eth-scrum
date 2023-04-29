import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useState } from "react";
import { useParams } from "react-router";
export const NuevoNodo = () => {
  const [mensaje, setMensaje] = useState("");
  const { numero } = useParams();
  const sendServer = async (datos) => {
    console.log(datos);
    console.log(numero);
    const numeroRed = numero.substring(3);

    const response = await fetch(
      `http://localhost:3333/network/add/${numeroRed}/${datos.node}`,
      {
        method: "POST",
        body: JSON.stringify(datos),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const datosResponse = await response.json();
    setMensaje(JSON.stringify(datosResponse));
    console.log(datosResponse);
  };
  const mutation = useMutation(sendServer);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const submit = (data) => {
    mutation.mutate(data);
  };
  return (
    <div className="align-items-center justify-content-center text-center w-100">
      {mensaje != "" ? <p className="alert alert-success">{mensaje}</p> : ""}
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4">
          <form onSubmit={handleSubmit((data) => submit(data))}>
            <div className="row">
              <div>
                <label>Nº Node</label>
                <input
                  defaultValue="1"
                  className="form-control"
                  {...register("node", { required: true })}
                />
              </div>
            </div>
            <div className="row mt-2">
              <div>
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Add node"
                />
              </div>
            </div>
          </form>
        </div>
        <div className="col-4"></div>
      </div>
    </div>
  );
};
