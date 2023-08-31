import React from "react";
import { Outlet } from "react-router-dom";

const Paths = () => {
    return (
        <div>
            <h1>Paths</h1>
            <Outlet />
        </div>
    );
};

export default Paths;
