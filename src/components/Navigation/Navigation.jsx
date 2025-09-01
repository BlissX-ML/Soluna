import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import classes from './Navigation.module.css';

import { ICONS } from "../../Data/homePage.js";
import { recapAsideContext } from "../../store/RecapAsideManageContext.jsx";

import NavItems from "./NavItems.jsx";
import NotionNav from "./NotionNav.jsx";

const Logo = ICONS.logo;

export default function Navigation() {
    const ctx = useContext(recapAsideContext);
    const navigate = useNavigate();

    return (
        <header className='header'>
            <nav className={classes.nav}>
                <Logo className={classes.logo} />

                <ul className={classes.ul}>
                    <li>
                        <NavItems path='/home'>首页</NavItems>
                    </li>

                    <li>
                        <NavItems path='/plans'>计划</NavItems>
                    </li>

                    <li className={classes.recap} onMouseEnter={ctx.openDrop} onMouseLeave={ctx.closeDrop}>
                        <NotionNav />
                    </li>

                    <li>
                        <NavItems path='footprint'>足迹</NavItems>
                    </li>

                    <li>
                        <NavItems path='projects'>项目</NavItems>
                    </li>

                    <li>
                        <NavItems path='about'>关于我</NavItems>
                    </li>
                </ul>

                <div className={classes.goBack}>
                    <button onClick={() => navigate('/')}>返回介绍页</button>
                </div>
            </nav>
        </header >
    )
}