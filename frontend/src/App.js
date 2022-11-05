import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import BmiCalculator from "./pages/Bmi";
import History from "./pages/History";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <br/>
      <br/>
      <br/>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>}/>
        <Route path="/bmi" element={<BmiCalculator/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/history" element={<History/>}/>
      </Routes>
    </div>
  );
}

export default App;
