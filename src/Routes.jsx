import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Navbar from "./Components/NavBar";
import ChatBotStack from "./Chat/ChatGemini";
import History from "./History/History";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Navbar></Navbar>
            <Routes>
                <Route path="/" element={<ChatBotStack />}></Route>
                <Route path="/History" element={<History />}></Route>
            </Routes>
        </BrowserRouter>
    )
}