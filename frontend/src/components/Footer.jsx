import logo from "../images/ethereum.png"; // with import
export const Footer = () => {
  return (
    <div className="fixed-bottom border-top border-dark">
      <footer className="bg-white text-center text-lg-start text-dark">
        <div className="container py-2">
          <div className="row mt-4">
            <div className="col-lg-3 col-md-6 mb-md-0">
              <div className="rounded-circle bg-white shadow-1-strong d-flex align-items-center justify-content-center mb-4 mx-auto">
                <img src={logo} height="70" width="250" alt="" loading="lazy" />
              </div>

              <p className="text-center">BUILD PRIVATE ETHEREUM NETWORKS</p>

              <ul className="list-unstyled d-flex flex-row justify-content-center">
                <li>
                  <i className="fab fa-facebook-square mx-2"></i>
                </li>
                <li>
                  <i className="fab fa-instagram mx-2"></i>
                </li>
                <li>
                  <i className="fab fa-youtube mx-2"></i>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-md-0">
              <h5 className="text-uppercase mb-4">TERMS AND CONDITIONS</h5>

              <ul className="list-unstyled">
                <li className="mb-2">Test</li>
                <li className="mb-2">Test</li>
                <li className="mb-2">Test</li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-md-0">
              <h5 className="text-uppercase mb-4">PRIVACY</h5>

              <ul className="list-unstyled">
                <li className="mb-2">Test</li>
                <li className="mb-2">Test</li>
                <li className="mb-2">Test</li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-md-0">
              <h5 className="text-uppercase mb-4">CONTACT</h5>

              <ul className="list-unstyled">
                <li>
                  <p>
                    <i className="fas fa-map-marker-alt pe-2"></i> Spain
                  </p>
                </li>
                <li>
                  <p>
                    <i className="fas fa-phone pe-2"></i>+ 34 666 666 666
                  </p>
                </li>
                <li>
                  <p>
                    <i className="fas fa-envelope pe-2 mb-0"></i>
                    contacto@codecrypto.com
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          © 2023 Copyright: Sergio, Miguel, Pablo
        </div>
      </footer>
    </div>
  );
};
