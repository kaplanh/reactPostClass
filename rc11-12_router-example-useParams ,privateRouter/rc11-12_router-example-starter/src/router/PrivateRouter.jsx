import { Navigate, Outlet } from "react-router-dom";

export const PrivateRouter = ({ user }) => {
    // const { user } = true;
    return user ? <Outlet /> : <Navigate to="/contact"/>;
};
