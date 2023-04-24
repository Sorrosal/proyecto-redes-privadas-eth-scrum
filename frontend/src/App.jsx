import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeBody } from "./components/HomeBody";
import { NetworkList } from "./components/NetworkList";
import { NodesList } from "./components/NodesList";
import { NuevaRed } from "./components/NuevaRed";
import { Home } from "./Home";
import { QueryClientProvider, QueryClient } from "react-query";
import { Explorer } from "./components/Explorer";
import { Transaction } from "./components/Transaction";
import { Faucet } from "./components/Faucet";
const queryClient = new QueryClient();
export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<HomeBody></HomeBody>}></Route>
            <Route path="/home" element={<HomeBody></HomeBody>}></Route>
            <Route path="/explorer" element={<Explorer></Explorer>}></Route>
            <Route
              path="/transaction"
              element={<Transaction></Transaction>}
            ></Route>
            <Route path="/faucet" element={<Faucet></Faucet>}></Route>
            <Route path="/networkList" element={<NetworkList />}></Route>
            <Route path="/nodesList/:numero" element={<NodesList />}></Route>
            <Route path="/nuevaRed" element={<NuevaRed />}></Route>
            <Route path="*" element="not found"></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};
