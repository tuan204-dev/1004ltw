import { Button, Input } from "antd";
import React, { useState } from "react";
import AuthServices from "../services/AuthServices";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

// fake credential

const fakeCredential = {
  username: "admin",
  password: "admin",
};

const Login = () => {
  const { setUser } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await AuthServices.login(username, password);

      if (res.success) {
        setUser(res.data);
        navigate("/");
      } else {
        throw new Error(res.message);
      }
    } catch (e) {
      console.error(e);
      alert("Login failed");
    }
  };

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
