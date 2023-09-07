import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const [activePage, setActivePage] = useState<string>("");

  useEffect(() => {
    const currentPath = location.pathname;

    if (currentPath === "/dashboard") {
      setActivePage("dashboard");
    } else if (currentPath === "/mentee") {
      setActivePage("mentee");
    } else if (currentPath === "/user") {
      setActivePage("user");
    } else if (currentPath === "/class") {
      setActivePage("class");
    }
  });

  return (
    <div className="w-[20vw] h-[100vh] fixed shadow-md flex flex-col">
      <img
        src="./logo.png"
        alt=""
        className="w-40 h-auto pt-5 pl-5"
      />
      <div className="flex flex-col justify-between h-full">
        <ul className="px-6 py-5 leading-[40px]">
          <a href="/dashboard">
            <li
              className={`flex items-center rounded-lg px-3 mb-3 ${
                activePage === "dashboard"
                  ? "bg-activeBackground text-white"
                  : "hover:bg-activeBackground hover:text-white text-black"
              }`}
            >
              <i className="fa-solid fa-house mr-2"></i>
              Dashboard
            </li>
          </a>
          <a href="/mentee">
            <li
              className={`flex items-center rounded-lg px-3 mb-3 ${
                activePage === "mentee"
                  ? "bg-activeBackground text-white"
                  : "hover:bg-activeBackground hover:text-white text-black"
              }`}
            >
              <i className="fa-solid fa-users mr-2"></i>
              Mentee
            </li>
          </a>
          <a href="/user">
            <li
              className={`flex items-center rounded-lg px-3 mb-3 ${
                activePage === "user"
                  ? "bg-activeBackground text-white"
                  : "hover:bg-activeBackground hover:text-white text-black"
              }`}
            >
              <i className="fa-solid fa-user mr-2"></i>
              User
            </li>
          </a>
          <a href="/class">
            <li
              className={`flex items-center rounded-lg px-3 mb-3 ${
                activePage === "class"
                  ? "bg-activeBackground text-white"
                  : "hover:bg-activeBackground hover:text-white text-black"
              }`}
            >
              <i className="fa-solid fa-list mr-2"></i>
              Class
            </li>
          </a>
        </ul>
        <ul className="px-6 py-5 leading-[40px]">
          <a href="/class">
            <li
              className={`flex items-center rounded-lg px-3 mb-3 ${
                activePage === "class"
                  ? "bg-activeBackground text-white"
                  : "hover:bg-activeBackground hover:text-white text-black"
              }`}
            >
              <i className="fa-solid fa-right-to-bracket mr-2"></i>
              Logout
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;