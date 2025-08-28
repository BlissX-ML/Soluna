import { useContext } from "react";
import { RECAP_NAV } from "../../../Data/recap.js";
import classes from './CategoryTitle.module.css'

import { recapAsideContext } from "../../../store/RecapAsideManageContext.jsx";

export default function CategoryTitle() {

    const ctx = useContext(recapAsideContext);

    return (
        <>
            {RECAP_NAV.map((val) => (
                <li
                    key={val.key}
                    onClick={() => ctx.handleState(val.key)}
                    className={val.key === ctx.key ? classes.active : ''}
                >
                    {val.title}
                </li>
            ))}
        </>

    )
}