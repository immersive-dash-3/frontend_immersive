import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Cookie from "js-cookie";
import Swal from "sweetalert2";

const Sidebar = () => {
  const location = useLocation();
  const [activePage, setActivePage] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigate = useNavigate()

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

  const handleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const handleLogout = () => {
    Cookie.remove("token");
    Cookie.remove('email');
    Cookie.remove('password');

    Swal.fire({
      icon: "success",
      title: "Logged out successfully",
      showConfirmButton: false,
      timer: 1500,
    })
    .then((res) => {
      navigate('/login');
    })
    .catch((err) => {
      console.log(err);
    })
  }

  return (
    <div className="lg:w-[20vw] lg:h-[100vh] fixed shadow-md flex lg:flex-col flex-row w-full justify-between items-center p-3 bg-white">
      <img
        src="../../public/logo.png"
        alt=""
        className="w-20 lg:w-40 h-auto lg:pt-5 lg:pl-5"
      />
      <button onClick={() => handleSidebar()} className="lg:hidden bg-transparent outline-none border-none focus:outline-none focus:border-none text-[20px]">
        <i className="fa-solid fa-list"></i>
      </button>
      <div className={`${isOpen === true ? 'absolute top-0 left-0 bg-white w-[70vw] h-[100vh] shadow-md' : 'hidden'} lg:flex lg:flex-col lg:justify-between lg:h-full lg:w-full lg:relative lg:shadow-none`}>
        <div className="px-10 flex justify-center mt-4 lg:hidden">
          <img
            src="../../public/logo.png"
            alt=""
            className="w-24"
          />
        </div>
        <ul className="lg:px-6 px-2 py-5 leading-[40px] lg:text-[18px]">
          <a href="/dashboard">
            <li
              className={`flex items-center rounded-lg px-3 lg:py-1 mb-3 ${
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
              className={`flex items-center rounded-lg px-3 lg:py-1 mb-3 ${
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
              className={`flex items-center rounded-lg px-3 lg:py-1 mb-3 ${
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
              className={`flex items-center rounded-lg px-3 lg:py-1 mb-3 ${
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
        <ul className="lg:px-6 px-2 py-5 leading-[40px]">
          <div onClick={() => handleLogout()}>
            <li
              className={`flex items-center rounded-lg px-3 lg:py-1 mb-3 ${
                activePage === "class"
                  ? "bg-activeBackground text-white"
                  : "hover:bg-activeBackground hover:text-white text-black"
              }`}
            >
              <i className="fa-solid fa-right-to-bracket mr-2"></i>
              Logout
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
