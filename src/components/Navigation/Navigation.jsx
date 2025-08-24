import { NavLink } from "react-router-dom";
import { useRef, useState } from "react";

import classes from './Navigation.module.css';
import RecapDropArrow from "../Recap/DropArrow";
import RecapDropContent from "../Recap/DropContent";
import { ICONS } from "../../Data/homePage";

const Logo = ICONS.logo;

export default function Navigation() {
    const [dropList, setDropList] = useState(false);

    const timer = useRef(null);
    const open = () => { clearTimeout(timer.current); setDropList(true); };
    const close = () => { timer.current = setTimeout(() => setDropList(false), 120); }; // 轻微延迟更稳

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
                    <li
                        onMouseEnter={open}
                        onMouseLeave={close}
                        style={{ position: 'relative' }}
                    >
                        <div className={classes.items}>
                            <NavLink
                                to='/recap'
                                className={({ isActive }) => isActive ? classes.active : undefined}
                            >
                                Recap
                            </NavLink>
                            <RecapDropArrow drop={dropList} onChange={() => setDropList(prev => !prev)} />
                        </div>
                        <RecapDropContent drop={dropList} onChange={setDropList} />
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