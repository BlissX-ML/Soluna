import { NavLink } from "react-router-dom";
import classes from './Glob.module.css'
import { useState } from "react";

export default function Glob({ children, src, delay }) {
    const [hasMouseEnter, setHasMouseEnter] = useState(false);

    function handleMouseEnter() {
        setHasMouseEnter(true)
    }

    function handleMouseMove() {
        setHasMouseEnter(false)
    }

    return (
        <div
            className={`${classes.global} ${hasMouseEnter ? classes.noAnimation : ""}`}
            style={{ animationDelay: `${delay}s` }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseMove}
        >
            <NavLink to={src} className={classes.textLink} >
                <p >{children}</p>
            </NavLink>
        </div >
    )
}