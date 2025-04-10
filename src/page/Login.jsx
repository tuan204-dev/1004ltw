import { Button, Input } from "antd";
import React, { useState } from "react";

// fake credential

const fakeCredential = {
  username: "admin",
  password: "admin",
};

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (
      username === fakeCredential.username &&
      password === fakeCredential.password
    ) {
      alert("Login successful");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex flex-col gap-y-3 max-w-[300px] mx-auto justify-center items-center">
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
  );
};

export default Login;
