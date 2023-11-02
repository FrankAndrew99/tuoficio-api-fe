import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import {LoginForm} from "./components/LoginForm/LoginForm"; 
import {SignUpForm} from "./components/SignUpForm/SignUpForm"
export default function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginForm/>}/>
          <Route path="/signup" element={<SignUpForm/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
