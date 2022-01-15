import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Car from "./pages/Car";
import Favorites from "./pages/Favourites";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { useSelector } from "react-redux";

function App() {
  const loggedIn = useSelector((state) => state.user.loggedIn);
  return (
    <Router>
      <Routes>
        <Route element={<Homepage />} exacth path="/" />
        <Route element={<Favorites />} exacth path="/favorites" />
        <Route element={<Car />} path="/car/:id" />
        <Route
          element={loggedIn ? <Homepage /> : <Register />}
          path="/register"
        />
        <Route element={loggedIn ? <Homepage /> : <Login />} path="/login" />
      </Routes>
    </Router>
  );
}

export default App;
