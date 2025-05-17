import { createContext, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const PublicRoutes = ["/login", "/register"];
const PrivateRoutes = ["/", "/about", "/blog/"];

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  console.log("user", user);

  const result = useMemo(() => ({ user, setUser }), [user, setUser]);

//   if (user && PublicRoutes.includes(pathname)) {
//     navigate("/");
//   }

//   if (!user && PrivateRoutes.includes(pathname)) {
//     navigate("/login");
//   }

  return <AuthContext.Provider value={result}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
