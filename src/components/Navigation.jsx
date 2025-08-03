import { NavLink } from "react-router-dom";

import classes from './Navigation.module.css';

export default function Navigation() {
    return (
        <header className={classes.header}>
            <nav className={classes.nav}>
                <img className={classes.logo} />

                <ul className={classes.ul}>
                    <li>
                        <NavLink
                            to='/'
                            className={({ isActive }) => isActive ? classes.active : undefined}
                        >
                            HomePage
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/recap'
                            className={({ isActive }) => isActive ? classes.active : undefined}
                        >
                            Recap
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/footprint'
                            className={({ isActive }) => isActive ? classes.active : undefined}
                        >
                            Footprint
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/projects'
                            className={({ isActive }) => isActive ? classes.active : undefined}
                        >
                            Projects
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/about'
                            className={({ isActive }) => isActive ? classes.active : undefined}
                        >
                            About
                        </NavLink>
                    </li>
                </ul>

                <p className={classes.other}>Other</p>
            </nav>
        </header >
    )
}