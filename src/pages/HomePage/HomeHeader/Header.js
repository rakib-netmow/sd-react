import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div class="header-bottom">
      <div class="home-container">
        <div class="header-bottom-content">
          <Link to="/" class="logo">
            <img
              src="https://squaddeck.com/assets/main/img/logo.png" // need img
              alt="SquadDeck Logo"
            />
          </Link>
          <nav class="main-nav">
            <ul class="nav-list">
              <li>
                <Link to="/Login" class="login-btn">
                  <img
                    src="https://squaddeck.com/assets/main/img/login.png"
                    alt="Login"
                  />
                  <span>Login</span>
                </Link>
              </li>
              <li>
                <Link to="/Register" class="nav-btn-common btn-hover nav-btn-primary">
                  <span>Register</span>
                </Link>
              </li>
              <li>
                <Link to="" class="nav-btn-common  btn-secondary">
                  <span>Book A Demo</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
