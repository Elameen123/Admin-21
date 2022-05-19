import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
// import Dashboard from "./Component/SideNav/Dashboard";
import ProtectedRoutes from "./Component/ProtectedRoutes";
import Home from "./Pages/Dashboard/HomePage/Home";
import Client from "./Pages/Dashboard/ClientPage/Client";
import Product from "./Pages/Dashboard/ProductPage/Product";
import Team from "./Pages/Dashboard/TeamPage/Team";
// import "mdb-react-ui-kit/dist/css/mdb.min.css";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route element={<ProtectedRoutes />}>
            {/* <Route path="/*" element={<Dashboard />} /> */}
            <Route path="/*" element={<Home />} />
            <Route path="/Client" element={<Client />} />
            <Route path="/Team" element={<Team />} />
            <Route path="/Product" element={<Product />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
