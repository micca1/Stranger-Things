import React, { useState } from "react";
import { API } from "./App";

const Register = (props) => {
  const setToken = props.setToken;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  const history = useHistory();

  const handelRegister = async (e) => {
    e.preventDefault();
    setError("");
    if (password !== confirm) {
      setError("Confirm password does not match original password.");
      return;
    }
    const resp = await fetch(`${API}/usesrs/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username,
          password,
        },
      }),
    });
    const info = await resp.json();
    if (info.error) {
      return setError(info.error.message);
    }
    setToken(info.data.token);
    localStorage.setItem("token", info.data.token);

    history.push("/");
  };

  return (
    <>
      <h1>Register:</h1>
      <form onsubmit={handelRegister}>
        <input
          required
          placeholder="Enter username.."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          required
          placeholder="Enter password.."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          required
          placeholder="Confirm password.."
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
        />
        <button>Register</button>
      </form>
      <p>{error}</p>
    </>
  );
};

export default Register;
