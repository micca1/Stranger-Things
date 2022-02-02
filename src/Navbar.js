import { Link } from "react-router-dom";
import React from "react";

const Navbar = ({ user, setToken, setUser }) => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/Post">Posts</Link>
      <Link to="/Register">Register</Link>
      <Link
        onCLick={() => {
          setToken("");
          setUser(null);
          localStorage.removeItem("token");
        }}
      >
        Log Out
      </Link>
      {user ? <span>Welcome{(user, username)}</span> : null}
    </>
  );
};
export default Navbar;
