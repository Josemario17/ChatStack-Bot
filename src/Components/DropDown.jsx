import { useContext } from "react";
import { AuthContext } from "../Contexts/users";
import { auth } from "../../conectar";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router";

export default function DropDown({ stateDropDown }) {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  async function handleOutUser() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const Login = sessionStorage.setItem('login', 'false')
        console.log(Login);
        navigate("/")
      }
    });

  }

  return (
    <div
      onMouseLeave={(e) => stateDropDown(false)}
      className="w-1/2 flex top-full mt-[2px] right-1 absolute text-gray-700 shadow-sm"
    >
      <button
        onClick={handleOutUser}
        className="w-full h-full p-2 px-4 bg-white flex gap-3 items-center justify-center rounded-lg border border-solid border-gray-200"
      >
        Sair
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="red"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9"
          />
        </svg>
      </button>
    </div>
  );
}
