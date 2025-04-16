import { useLocalStorage } from "@uidotdev/usehooks";
import { Button, Input } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// fake credential

const fakeCredential = {
  username: "admin",
  password: "admin",
};

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useLocalStorage("is_logged_in", false);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (
      username === fakeCredential.username &&
      password === fakeCredential.password
    ) {
      setIsLoggedIn(true);
      navigate("/", { replace: true });
    } else {
      alert("Invalid credentials");
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/", { replace: true });
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className="w-full grid place-items-center">
      <div className="fixed top-0 left-1/2 -translate-x-1/2">
        <span>Enter this account to login</span> <br />
        User: {fakeCredential.username} <br />
        Password: {fakeCredential.password}
      </div>
      <div className="min-h-screen flex flex-col gap-y-3 max-w-[300px] mx-auto justify-center items-center w-screen">
        <div className="flex flex-col gap-y-1 w-full">
          <label htmlFor="username">User name</label>
          <Input
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-y-1 w-full">
          <label htmlFor="password">Password</label>
          <Input.Password
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Button onClick={handleLogin} type="primary" className="w-full">
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
