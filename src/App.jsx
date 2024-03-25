import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx"
import DishDetailsPage from "./pages/DishDetailsPage/DishDetailsPage.jsx";
import CategoryPage from "./pages/CategoryPage/CategoryPage.jsx"
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx";

const App = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <Routes>
        <Route exact path="/" element ={<HomePage/>} />
        <Route exact path="/meal/:id" element ={<DishDetailsPage/>} />
        <Route path = "/meal/category/:name" element = {<CategoryPage />} />
        <Route path  = "*" element = {<ErrorPage />} />
      </Routes>
    </>
  );
};

export default App;
