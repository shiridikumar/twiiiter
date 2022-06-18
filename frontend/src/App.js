import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import "./App.css";

import Home from "./components/common/Home";
import Register from "./components/common/Register";
import Navbar from "./components/templates/Navbar";
import { useState } from "react";
import Login from "./components/common/Login";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

function App() {

  const [user, setLoginUser] = useState({})
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={(() => {
          console.log(user)
          if(user && user.user_name){
            return <Home/>
          }else{
            return <Login setLoginUser={setLoginUser}/>
          }
        })()}/>
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
