import { BrowserRouter, Routes, Route, Outlet, useLocation } from "react-router-dom";
import "./App.css";

import UsersList from "./components/users/UsersList";
import Home from "./components/common/Home";
import Register from "./components/common/Register";
import Navbar from "./components/templates/Navbar";
import Profile from "./components/users/Profile";
import Login from './components/common/Login'
import { useState } from "react";
import Timeline from "./components/common/Timeline";
import { HashRecord_list_comp } from "./components/common/Trending";

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
  // return (
  //   <BrowserRouter>
  //     <Routes>
  //       <Route path="/" element={<Layout />}/>
  //         <Route path="/home" element={<Home />} />
  //         <Route path="/users" element={<UsersList />} />
  //         <Route path="/register" element={<Register />} />
  //         <Route path="/profile" element={<Profile />} />
  //     </Routes>
  //   </BrowserRouter>
  // );
  const [user, setLoginUser] = useState({})

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={(() => {
          console.log(user)
          if(user && user.user_name){
            console.log(user);
            return <Home user={user}/>
          }else{
            return <Login setLoginUser={setLoginUser}/>
          }
        })()}/> */}
         <Route path="/login" element={<Login />} /> 
        <Route path="/" element={<Home />} /> 
        <Route path="/home" element={<Home />} /> {/* This has to be commented in the end */}
        <Route path="/register" element={<Register />} />
        <Route path="/explore" element={<HashRecord_list_comp />} />
        <Route path="/explore/:hashtag" element={<Timeline type="HASHTAG"/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;