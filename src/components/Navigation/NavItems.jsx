import { NavLink } from "react-router-dom";
import classes from './NavItems.module.css'

export default function NavItems({ path, children }) {
    return (
        <>
            <NavLink
                to={path}
                className={({ isActive }) => isActive ? classes.active : undefined}
            >
                {children}
            </NavLink>
        </>
    )
}