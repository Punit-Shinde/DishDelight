import React from "react";
import "./Header.scss";
import Navbar from "./Navbar.jsx";
import SearchForm from "./SearchForm.jsx";

const Header = () => {
  return (
    <header className="header">
      <Navbar />
      <div className="header-content flex align-center justify-center flex-column text-center">
        <SearchForm />
        <h1 className="text-white header-title ls-2">
          Hungry for Flavorful Recipes?
        </h1>
        <p className="text-uppercase text-white my-3 ls-1">
          Where Every Bite Tells a Flavorful Story.
        </p>
      </div>
    </header>
  );
};

export default Header;
