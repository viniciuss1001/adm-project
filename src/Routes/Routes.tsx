import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { AboutStudent } from "../pages/AboutStudent/AboutStudent";

export function ApllicationRoutes() {
    return (
        <Routes>
            <Route path='/student' element={<AboutStudent/>} />
            <Route path="/" element={<Home />} />
        </Routes>
    )
}