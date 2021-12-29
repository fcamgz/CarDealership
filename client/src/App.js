import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Homepage from './pages/Homepage';
import Car from './pages/Car';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Homepage/>} exatch path="/"/>
        <Route element={<Car />} path="/:id"/>
      </Routes>
    </Router>
  );
}

export default App;
