import axiosInstance from "./http";

const login = async (username, password) => {
  const { data } = await axiosInstance.post("/auth/login", {
    username,
    password,
  });
  return data;
};

const AuthServices = { login };

export default AuthServices;
