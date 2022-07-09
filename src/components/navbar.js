import React from "react";
import { NavLink } from "react-router-dom";
import "../style/navbar.scss";

export default function Navbar() {
  return (
    <div>
      <div className="navbar" style={{}}>
        <h1 className="nav-title">Techno Bookstore</h1>
        <div>
          <NavLink className={"nav-link"} to="/add-book">
            Add Book
          </NavLink>

          <NavLink className={"nav-link"} to="/">
            Home
          </NavLink>
        </div>
      </div>
    </div>
  );
}
