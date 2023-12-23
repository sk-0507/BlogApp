import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Nopage from "./Components/Nopage";
import SignUp from "./Components/SignUp";



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signUp" element={<SignUp/>} />
        <Route path="*" element={<Nopage />} />
      </Routes>
    </>
  );
}

export default App;
