import { NavLink, useNavigate } from "react-router-dom";
import classes from './Glob.module.css'
import { useState } from "react";

export default function Glob({ children, delay, handleClick }) {
    const navigate = useNavigate();

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
            onClick={handleClick}
        >

            <p className={classes.textLink}>{children}</p>

        </div >
    )
}