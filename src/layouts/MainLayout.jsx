import { Button } from "antd";
import React, { useMemo } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

const MainLayout = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const navList = useMemo(
    () => ({
      "/": {
        title: "Home",
        isActive: pathname === "/",
      },
      "/about": {
        title: "About",
        isActive: pathname === "/about",
      },
    }),
    [pathname]
  );

  const handleLogout = () => {
    localStorage.removeItem("is_logged_in");
    navigate("/login", { replace: true });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-primary">Blog</div>
            <nav className="hidden md:flex space-x-8 items-center">
              {Object.entries(navList).map(([path, { title, isActive }]) => (
                <Link
                  key={path}
                  to={path}
                  className={`text-primary font-medium transition-all ${
                    isActive ? "text-blue-500" : "text-gray-600"
                  } hover:text-blue-500`}
                >
                  {title}
                </Link>
              ))}
              <Button onClick={handleLogout}>Log out</Button>
            </nav>
          </div>
        </div>
      </header>
      <div className="mt-[64px] w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
