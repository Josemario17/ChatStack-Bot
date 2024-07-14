import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import ChatBotStack from "./Chat/ChatGemini";
import History from "./History/History";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";
import Private from "./Privates";

export default function AppRoutes() {

    return (
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/SignUp" element={<SignUp />}></Route>
            <Route path="/Chat" element={<Private><ChatBotStack /></Private>}></Route>
            <Route path="/History" element={<Private><History /></Private>}></Route>
            </Routes>
        </BrowserRouter>
    )
}