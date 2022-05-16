import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './Pages/Login/Login';
import Dashboard from './Component/SideNav/Dashboard'
import ProtectedRoutes from './Component/ProtectedRoutes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}/>

          <Route element={<ProtectedRoutes /> } >
            <Route path="/*" element={<Dashboard  />}/> 
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
