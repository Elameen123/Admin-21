import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './Pages/Login/Login';
import Dashboard from './Pages/Dashboard'
import ProtectedRoutes from './Component/ProtectedRoutes';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/Login' element={<Login />}/>
          <Route element={<ProtectedRoutes /> } >
              <Route path="/*" element={<Dashboard  />}/> 
            </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
