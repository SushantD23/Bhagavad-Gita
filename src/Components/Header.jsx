import React from "react";
import { NavLink } from "react-router-dom";
import "./components.css";

function Header() {
  return (
    <>
      <nav>
        <div className="left">
          <NavLink 
            to="/" 
            className={({ isActive }) => (isActive ? "active-link" : "inactive-link")}
          >
            <h1>Bhagavad Gita</h1>
          </NavLink>
        </div>
        <div className="mdle">
          <NavLink 
            to="/chapters" 
            className={({ isActive }) => (isActive ? "active-link" : "inactive-link")}
          >
            <h2>Chapters</h2>
          </NavLink>
          <NavLink 
            to="/verseoftheday" 
            className={({ isActive }) => (isActive ? "active-link" : "inactive-link")}
          >
            <h2>Verse of the day</h2>
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => (isActive ? "active-link" : "inactive-link")}
          >
            <h2>About Gita</h2>
          </NavLink>

          <NavLink 
            to="/issuefeed" 
            className={({ isActive }) => (isActive ? "active-link" : "inactive-link")}
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <h2>Issues?</h2>
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default Header;
