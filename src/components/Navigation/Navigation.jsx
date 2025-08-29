import { useContext } from "react";
import classes from './Navigation.module.css';

import DropArrow from "../Recap/Drop/DropArrow.jsx";
import DropContent from "../Recap/Drop/DropContent.jsx";
import { ICONS } from "../../Data/homePage.js";
import { recapAsideContext } from "../../store/RecapAsideManageContext.jsx";
import NavItems from "./NavItems";

const Logo = ICONS.logo;

export default function Navigation() {
    const ctx = useContext(recapAsideContext)

    return (
        <header className='header'>
            <nav className={classes.nav}>
                <Logo className={classes.logo} />

                <ul className={classes.ul}>
                    <li>
                        <NavItems path='/'>HomePage</NavItems>
                    </li>

                    <li className={classes.recap} onMouseEnter={ctx.openDrop} onMouseLeave={ctx.closeDrop}>
                        <div className={classes.items}>
                            <NavItems path='/recap'>Recap</NavItems>
                            <DropArrow drop={ctx.dropState} onChange={ctx.toggleDrop} />
                        </div>
                        <DropContent />
                    </li>

                    <li>
                        <NavItems path='/footprint'>Footprint</NavItems>
                    </li>

                    <li>
                        <NavItems path='/projects'>Projects</NavItems>
                    </li>

                    <li>
                        <NavItems path='/about'>About</NavItems>
                    </li>
                </ul>

                <p className={classes.other}>Other</p>
            </nav>
        </header >
    )
}