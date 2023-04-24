import imagenhome from "../images/imagenhome.png"; // with import
export const HomeBody = () => {
  return (
    <div>
      <div className="row mt-4">
        <div className="col">
          <p>
            <h4>TAREAS FRONTEND</h4>
            <br />
            <ul>
              <li>
                Debe tener una cabecera con el logo y nombre del servicio. El
                nombre del servicio será Build Private Ethereum Networks. Debe
                tener un footer que tendrá los links: Quienes somos, privacidad,
                términos y condiciones e icono de redes sociales.
              </li>

              <li>
                La aplicación tendrá una barra con la siguiente opción i.
                Networks
              </li>
              <li>
                El links nos saca la lista de redes debe tener un botón que
                permite añadir una red nueva. Se debe también de poder borrar
                una red y también visualizar la red
              </li>
              <li>
                Cuando visito una red me tiene que decir los nodos que tiene y
                debo tener la posibilidad de añadir un nuevo nodo, o borrar uno
                existente.
              </li>
              <li>
                Cuando visualizo la red debe de poder obtener la lista de los
                bloques
              </li>
              <li>Dado un bloque debo de poder ver las transacciones</li>
              <li>
                Data una transacción debo de poder ver los datos de esta GUÍA DE
                ESTUDIO codecrypto.academy
              </li>
              <li>
                Debo poder implementar un faucet para cargar monedas en mi
                billetera metamask.
              </li>
              <li>
                Hacer un traspaso de fondos de una cuenta del metamask a otra en
                un formulario.
              </li>
              <li>Dada un address debo de poder ver su balance</li>
            </ul>
          </p>
        </div>
        <div className="col ms-4">
          <img src={imagenhome} height="500" alt="" loading="lazy" />
        </div>
      </div>
    </div>
  );
};
