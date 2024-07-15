import { Link, useLocation } from "react-router-dom";
import logo from "../assets/img/logo.png";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Contexts/users";
import DropDown from "./DropDown";

export default function Navbar({userGeral}) {
  let location = useLocation();
  let [pathUrl, setPathUrl] = useState("/");
  const { user } = useContext(AuthContext);
  const [DropDn, setDropDown] = useState(false);
  let userName = user.split("@");
  let  name = userName[0];
   userGeral(name) 

  useEffect(() => {
    setPathUrl(location.pathname);
  }, [location.pathname]);

  return (
    <div className=" w-full px-10 flex items-center justify-between">
      <img src={logo} alt="" className="w-52" />
      <ul className="w-auto flex items-center justify-between gap-8">
        <Link
          to={"/Chat"}
          className={`text-lg px-2 pb-2 border-b-2 ${pathUrl == "/Chat" ? "border-solid border-primary" : ""}`}
        >
          Chat
        </Link>
        <Link
          to={"/History"}
          className={`text-lg px-2 pb-2 border-b-2 ${pathUrl == "/History" ? "border-solid border-primary" : ""}`}
        >
          Historico
        </Link>
        <button
          onClick={(e) => setDropDown(true)}
          className="ml-4 flex items-center relative text-white justify-between px-6 py-3 gap-2 bg-primary rounded-xl hover:bg-gray-400 duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
          Olá, {name}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
          {DropDn && <DropDown stateDropDown={setDropDown}></DropDown>}
        </button>
      </ul>
    </div>
  );
}
