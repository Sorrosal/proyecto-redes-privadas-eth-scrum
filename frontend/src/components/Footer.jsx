import "../styles/footer.css";
export const Footer = () => {
  return (
    <div className="d-flex justify-content-between mt-4 fixed-bottom px-5 bg-dark text-dark border-top text-white">
      <div>
        <ul className="nav flex-column mx-5 text-center">
          <h4>Home</h4>
          <li>Overview</li>
          <li>Explore dApps</li>
          <li>What make us Unique</li>
        </ul>
      </div>

      <div>
        <ul className="nav flex-column mx-5 text-center">
          <h4>Technology</h4>
          <li>Programs</li>
          <li>Papers</li>
          <li>Code</li>
        </ul>
      </div>

      <div>
        <ul className="nav flex-column mx-5 text-center">
          <h4>Ecosystem</h4>
          <li>Wallets</li>
          <li>Funds</li>
          <li>Overview</li>
        </ul>
      </div>
    </div>
  );
};
