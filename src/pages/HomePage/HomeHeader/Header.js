import React from "react";

const Header = () => {
  return (
    <div class="header-bottom">
      <div class="container">
        <div class="header-bottom-content">
          <a href="https://squaddeck.com/" class="logo">
            <img
              src="https://squaddeck.com/assets/main/img/logo.png" // need img 
              alt="Squaddeck Logo"
            />
          </a>
          <nav class="main-nav">
            <ul class="nav-list">
              <li>
                <a href="login.php" class="login-btn">
                  <img
                    src="https://squaddeck.com/assets/main/img/login.png"
                    alt="Login"
                  />
                  <span>Login</span>
                </a>
              </li>
              <li>
                <a href="register.php" class="btn-common btn-primary">
                  <span>Register</span>
                </a>
              </li>
              <li>
                <a href="book-demo.php" class="btn-common btn-secondary">
                  <span>Book A Demo</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
