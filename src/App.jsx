import React from "react";
import Header from "./components/Header/Header.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Home from "./pages/HomePage/HomePage.jsx"
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <Routes>
        <Route exact path="/" element ={<Home/>} />

      </Routes>
    </>
  );
};

export default App;
