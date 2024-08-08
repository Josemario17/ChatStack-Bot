import { Link, redirect, useNavigate } from "react-router-dom";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { db, auth } from "../../conectar";
import { toast } from "react-toastify";
import SideLeftUIForm from "../Components/SideLeftUIForm";

export default function SignUp() {

  const navigate = useNavigate();
  const [form, setForm] = useState({
      name: '',
      email: '',
      password: '',
  });
  const [loading, setLoading] = useState(false);

  const handdleUpdateForm = ({target}) =>{
    const {id, value} = target

    setForm({
      ...form, [id] : [value]
    })
    
  }

  async function newUser(e) {
    setLoading(true);
    e.preventDefault();
    const email = form.email[0];
    const password = form.password[0]
    
    await createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        toast.success("Cadastro feito com sucesso!");
        setTimeout(() => {
          setLoading(false);
          navigate("/");
        }, 1000);
      })
      .catch((error) => {
        setLoading(false);
        if (error === "auth/weak-password") {
          toast.error("Senha Fraca");
        } else if (error === "auth/email-already-in-use") {
          toast.error("O email usado já tem uma conta");
        }
        else if(error == " FirebaseError: Firebase: Error (auth/network-request-failed)"){
          toast.error("Falha na Rede")
        }
      });
  }

  return (
    <div>
      <section className="h-screen">
        <div className="grid grid-cols-1 min-h-full lg:grid-cols-2">
        <SideLeftUIForm></SideLeftUIForm>
          <div className="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
            <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
                Registrar Conta
              </h2>
              <p className="mt-2 text-base text-gray-600">
                Já tenho uma conta?{" "}
                <Link
                  to={"/"}
                  title=""
                  className="font-medium underline transition-all duration-200 hover:text-primary focus:text-primary hover:underline"
                >
                  Login
                </Link>
              </p>

              <form action="#" onSubmit={newUser} className="mt-8">
                <div className="space-y-5">
                  <div>
                    <label className="text-base font-medium text-gray-900">
                      {" "}
                      Primeiro Nome{" "}
                    </label>
                    <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                          className="w-5 h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>

                      <input
                        type="text"
                        id="name"
                        value={form.name}
                        onChange={handdleUpdateForm}
                        placeholder="Jose Santos"
                        className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-base font-medium text-gray-900">
                      {" "}
                      Email{" "}
                    </label>
                    <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                          className="w-5 h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                          />
                        </svg>
                      </div>

                      <input
                        type="email"
                        id="email"
                        value={form.email}
                        onChange={handdleUpdateForm}
                        required
                        placeholder="jose@mario.santos"
                        className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-base font-medium text-gray-900">
                      {" "}
                      Senha{" "}
                    </label>
                    <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
                          />
                        </svg>
                      </div>

                      <input
                        type="password"
                        id="password"
                        value={form.password}
                        onChange={handdleUpdateForm}
                        required
                        placeholder="********"
                        className="block w-full py-4 pl-11 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={loading ? true : false}
                      className="inline-flex items-center justify-center w-full px-4 py-3 text-base font-semibold text-gray-200 transition-all duration-200 border border-transparent rounded-md bg-primary focus:outline-none hover:opacity-80 focus:opacity-80"
                    >
                      {loading ? (
                        <div role="status" aria-label="loading">
                          <svg
                            className="w-6 h-6 stroke-white animate-spin "
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_9023_61563)">
                              <path
                                d="M14.6437 2.05426C11.9803 1.2966 9.01686 1.64245 6.50315 3.25548C1.85499 6.23817 0.504864 12.4242 3.48756 17.0724C6.47025 21.7205 12.6563 23.0706 17.3044 20.088C20.4971 18.0393 22.1338 14.4793 21.8792 10.9444"
                                stroke="stroke-current"
                                strokeWidth="1.4"
                                strokeLinecap="round"
                                className="my-path"
                              ></path>
                            </g>
                            <defs>
                              <clipPath id="clip0_9023_61563">
                                <rect
                                  width="24"
                                  height="24"
                                  fill="white"
                                ></rect>
                              </clipPath>
                            </defs>
                          </svg>
                          <span className="sr-only">Loading...</span>
                        </div>
                      ) : (
                        "Criar Conta"
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
