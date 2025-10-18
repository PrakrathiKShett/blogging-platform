import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">📰 NewsApp</h2>
      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/create">Create Post</a>
        <a href="/login">Login</a>
        <a href="/register">Register</a>
      </div>
    </nav>
  );
}
