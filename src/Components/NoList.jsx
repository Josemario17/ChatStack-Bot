
import chat from "../assets/img/chat.webp";
export default function NoList({nameProp}){
    return( <div className="w-full h-full flex flex-wrap justify-center items-start">
        <div className="text-center">
          <img
            src={chat}
            alt="chatStackBot"
            className="size-80 mx-auto"
          />
          <h1 className="text-2xl my-1 text-center w-full ">
            Como posso Ajudar {nameProp}?
          </h1>
          <p className="w-full text-center text-xs">
            Para um novo Prompt Adicione o Texto na caixa de texto {">"} e
            gere uma Resposta.
          </p>
          <p></p>
        </div>
      </div>)
}