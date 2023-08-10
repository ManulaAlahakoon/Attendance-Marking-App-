import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registration from './pages/Registration';
import People from './pages/People';
import Attendance from './pages/Attendance';
import Update from './pages/Update';
import "./style.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/registration" element={ <Registration/>} />
          <Route path="/people" element={ <People/>} />
          <Route path="/attendance" element={ <Attendance/>} />
          <Route path="/update" element={ <Update/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
