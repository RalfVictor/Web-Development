import React from "react";

const Navigation = () => {
  return (
    <div>
      {" "}
      <nav className="container">
        <div className="logo">
          <img src="/Images/brand_logo.png" alt="logo" />
        </div>
        <ul>
          <li href="https://www.nike.com/in/">Menu</li>
          <li href="H">Location</li>
          <li href="H">About</li>
          <li href="H">Contact</li>
        </ul>
        <button>Login</button>
      </nav>
    </div>
  );
};

export default Navigation;
