import React, { useState } from "react";
import Nav from "../components/Nav";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import People from "../pages/People";
import Paths from "../pages/Paths";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import { PersonDetail } from "../pages/PersonDetail";
import { PrivateRouter } from "./PrivateRouter";
import { FullStack } from "../pages/FullStack";
import { Aws } from "../pages/Aws";

export const AppRouter = () => {
    const [user, setUser] = useState(false);
    return (
        <>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route element={<PrivateRouter user={user} />}>
                    <Route path="/people" element={<People />} />
                    <Route path="/people/:id" element={<PersonDetail />} />
                </Route>
                <Route path="/paths" element={<Paths />}>
                    <Route index element={<FullStack />} />
                    <Route path="fullstack" element={<FullStack />} />
                    <Route path="aws" element={<Aws />} />
                </Route>
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
};
