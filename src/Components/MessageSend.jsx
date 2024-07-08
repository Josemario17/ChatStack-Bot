export default function MessageSend({ text, editText }) {
  function handleAdd() {
  }

  return (
    <div className="w-full h-auto flex items-center justify-end">
      <div className="w-1/2 h-auto px-5 py-3 mb-3 bg-[#ecefff] rounded-xl">
        <button onClick={handleAdd} className="size-auto flex-shrink-0 mr-2">
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
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
            />
          </svg>
        </button>
        {text}.
      </div>
    </div>
  );
}
