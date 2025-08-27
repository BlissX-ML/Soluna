import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation.jsx";
import { NavigationContext } from "../store/NavigationContext.jsx";

export default function Nav() {
    return (
        <>
            <NavigationContext>
                <Navigation />
            </NavigationContext>

            <Outlet />
        </>
    )
}