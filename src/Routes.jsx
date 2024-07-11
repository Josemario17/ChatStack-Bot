import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Navbar from "./Components/NavBar";
import ChatBotStack from "./Chat/ChatGemini";
import History from "./History/History";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Navbar></Navbar>
            <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/SignUp" element={<SignUp />}></Route>
                <Route path="/Chat" element={<ChatBotStack />}></Route>
                <Route path="/History" element={<History />}></Route>
            </Routes>
        </BrowserRouter>
    )
}