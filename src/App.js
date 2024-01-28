import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from "./pages/login"
import Test from './pages/test';
import Dashboard from './pages/dashboard';

document.title = "Login"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index='/login' element={<Login></Login>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/test' element={<Test></Test>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='*' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
