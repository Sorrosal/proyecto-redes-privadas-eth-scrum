import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useState } from "react";
export const NuevaRed = () => {
  const [mensaje, setMensaje] = useState("");
  const sendServer = async (datos) => {
    const response = await fetch("http://localhost:3333/network/create", {
      method: "POST",
      body: JSON.stringify(datos),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const datosResponse = await response.json();
    setMensaje(JSON.stringify(datosResponse));
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
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4">
          <form onSubmit={handleSubmit((data) => submit(data))}>
            <div className="row">
              <div>
                <label>Cuenta</label>
                <input
                  className="form-control"
                  defaultValue="0x9041142ec77b2f07032493Bf5e870Ae1D065c6F4"
                  {...register("cuenta", { required: true })}
                />
              </div>
            </div>
            <div className="row">
              <div>
                <label>Numero de Red</label>
                <input
                  defaultValue="1"
                  className="form-control"
                  {...register("network", { required: true })}
                />
              </div>
            </div>
            <div className="row mt-2">
              <div>
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Add network"
                />
              </div>
            </div>
          </form>
        </div>
        <div className="col-4"></div>
      </div>
      {mensaje != "" ? (
        <div className="alert alert-success mt-2" role="alert">
          NETWORK CREATED!<br></br>
          {mensaje}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
