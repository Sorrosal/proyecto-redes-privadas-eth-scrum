import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Outlet } from "react-router-dom";
export const Home = () => {
  return (
    <div className="container">
      <div className="vh-20">
        <Header></Header>
      </div>

      <div className="pt-5 vh-60">
        <Outlet></Outlet>
      </div>
      <div className="mt-5 vh-20"></div>
      <Footer></Footer>
    </div>
  );
};
