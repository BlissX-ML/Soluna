import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";

export default function Nav() {
    return (
        <>
            <Navigation />
            <Outlet />
        </>
    )
}