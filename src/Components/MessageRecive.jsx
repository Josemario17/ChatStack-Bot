import logo from "../assets/img/logo-21.png";
import {} from './MessageReciveStyles.css';

export default function MessageRecive({ children }) {
  return (
    <div className="w-full h-auto flex items-start justify-start min-h-[300px] !mt-5 gap-2">
      <img src={logo} alt="" className="w-6" />
      <div className="w-full h-auto p-3 mb-3 bg-secondary rounded-xl flex items-start gap-4">
        <p className="w-auto grow text-left">
          <div className="message" dangerouslySetInnerHTML={{ __html: children }} />
        </p>
        <button>
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
              d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
