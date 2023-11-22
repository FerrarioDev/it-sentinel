import React from "react";
import { Navigate, Route, RouteProps } from "react-router";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { RootState } from "../store";

const ProtectedRoute = (props: RouteProps)=>{
    const auth = useSelector((state: RootState) => state.auth);
    if (auth.account) {
        if (props.path === "/login") {
            return <Route element={<Navigate to="/" replace />} />;
        }
        return <Route {...props}/>;
    } else if (!auth.account) {
        return <Route element={<Navigate to="/login" replace />} />;
    } else {
        return <div>Not found</div>;
    }
}

export default ProtectedRoute;
