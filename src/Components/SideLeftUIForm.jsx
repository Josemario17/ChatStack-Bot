
import vector from "../assets/img/vector.webp";
export default function SideLeftUIForm() {
  return (
    <div className="relative flex items-end px-4 pb-10 pt-60 sm:pb-16 md:justify-center lg:pb-24 bg-gray-50 sm:px-6 lg:px-8">
      <div className="absolute inset-0">
        <img className="object-cover w-full h-full" src={vector} alt="" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

      <div className="relative">
        <div className="w-full max-w-xl xl:w-full xl:mx-auto xl:pr-24 xl:max-w-xl">
          <h3 className="text-4xl font-bold text-white">
            Respostas Rápidas <br className="hidden xl:block" />
            para Promps Rápidos
          </h3>
          <ul className="grid grid-cols-1 mt-10 sm:grid-cols-2 gap-x-8 gap-y-4">
            <li className="flex items-center space-x-3">
              <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-primary rounded-full">
                <svg
                  className="w-3.5 h-3.5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <span className="text-md font-medium text-white">
                {" "}
                Geradas do gemini{" "}
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-primary rounded-full">
                <svg
                  className="w-3.5 h-3.5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <span className="text-md font-medium text-white">
                {" "}
                Acessibilidade{" "}
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-primary rounded-full">
                <svg
                  className="w-3.5 h-3.5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <span className="text-md font-medium text-white">
                {" "}
                Histórico de conversas{" "}
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-primary rounded-full">
                <svg
                  className="w-3.5 h-3.5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <span className="text-md font-medium text-white">
                {" "}
                Interface memorável{" "}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
