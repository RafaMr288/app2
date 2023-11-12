import './App.css';
import {Routes, Route} from "react-router-dom"
import Home from "./pages/home"
import Login from "./pages/login"
import Dashboard from './pages/dashboard';
import Consulta from './pages/consulta';
import { useNavigate } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route index="/home" element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/consulta' element={<Consulta></Consulta>}></Route>
      </Routes>
    </div>
  );
}

export default App;
