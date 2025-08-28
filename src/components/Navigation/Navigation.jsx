import { NavLink } from "react-router-dom";
import { useContext } from "react";
import classes from './Navigation.module.css';

import DropArrow from "../Recap/Drop/DropArrow.jsx";
import DropContent from "../Recap/Drop/DropContent.jsx";
import { ICONS } from "../../Data/homePage.js";
import { RecapContext } from "../../store/NavigationContext.jsx";

const Logo = ICONS.logo;

export default function Navigation() {
    const ctx = useContext(RecapContext)

    return (
        <header className='header'>
            <nav className={classes.nav}>
                <Logo className={classes.logo} />

                <ul className={classes.ul}>
                    <li>
                        <NavLink
                            to='/'
                            className={({ isActive }) => isActive ? classes.active : undefined}
                        >
                            HomePage
                        </NavLink>
                    </li>

                    <li className={classes.recap} onMouseEnter={ctx.dropOpen} onMouseLeave={ctx.dropClose}>
                        <div className={classes.items}>
                            <NavLink
                                to='/recap'
                                className={({ isActive }) => isActive ? classes.active : undefined}
                            >
                                Recap
                            </NavLink>
                            <DropArrow drop={ctx.dropState} onChange={ctx.dropStateSet} />
                        </div>
                        <DropContent />
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