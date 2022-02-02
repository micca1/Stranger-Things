import React, { useEffect, useState } from "react";
import { Link, Route } from "react-router-dom";
import Home from "./Home";
import Posts from "./Posts";
import Register from "./Register";
import Navbar from "./Navbar";

const API = "https://strangers-things.herokuapp.com/api/2110-FTB-ET-WEB-PT";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [token, setToken] = useState("");
  const [user, setUser] = useState(null);

  async function fetchPosts() {
    const resp = await fetch(`${API}/posts`);
    const info = await resp.json();
    setPosts(info.data.posts);
  }

  const fetchUser = async () => {
    const lsToken = localStorage.getItem("token");
    if (lsToken) {
      setToken(lsToken);
    }
    const response = await fetch(`${API}/users/me`, {
      headers: {
        Authorization: `Bearer ${lsToken}`,
      },
    });

    const info = await response.json();
    if (info.success) {
      setUser(info.data);
    }
  };
  useEffect(() => {
    fetchPosts();
  }, [token]);

  return (
    <>
      <Navbar user={user} setToken={setToken} setUSer={setUser} />

      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/posts">
        <Posts posts={posts} />
      </Route>

      <Route exact path="/register">
        <Register />
      </Route>
    </>
  );
};
export default App;
export { API };
