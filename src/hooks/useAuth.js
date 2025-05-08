import { useContext } from "react";
import { AuthContext } from "../hocs/AuthProvider";

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return {
    user: context.user,
    setUser: context.setUser,
  };
};

export default useAuth;
