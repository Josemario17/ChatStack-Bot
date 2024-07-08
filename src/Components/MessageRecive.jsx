import { useRef, useState } from "react";
import logo from "../assets/img/logo-21.png";
import {} from "./MessageReciveStyles.css";

export default function MessageRecive({ children }) {
  const divElementContentToCopy = useRef()
  const [copy, setCopy] = useState(false)

  function handdleCopy(){
    setCopy(true)
    navigator.clipboard.writeText(divElementContentToCopy.current.textContent)
    setTimeout(() => {
      setCopy(false)
    }, 2000);
  }

  return (
    <div className="w-full h-auto flex items-start justify-start !mt-5 gap-2">
      <img src={logo} alt="" className="w-6" />
      <div className="w-full h-auto p-3 mb-3 bg-secondary rounded-xl flex items-start gap-4">
        <p className="w-auto grow text-left">
          <div
            ref={divElementContentToCopy}
            className="message"
            dangerouslySetInnerHTML={{ __html: children }}
          />
        </p>
        <button onClick={handdleCopy}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={`${copy ? 'gray' : 'none'}`}
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
