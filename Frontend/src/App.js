import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Nopage from "./Components/Nopage";
import SignUp from "./Components/SignUp";
import LandingPage from "./Components/LandingPage";
import Postform from "./Components/Postform";
import Updatepost from "./Components/Updatepost";
import About from "./Components/About";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/Postform" element={<Postform />} />
        <Route path="/Updatepost/:id" element={<Updatepost />} />
        <Route path="/About" element={<About />} />
        <Route path="*" element={<Nopage />} />
      </Routes>
    </>
  );
}

export default App;
