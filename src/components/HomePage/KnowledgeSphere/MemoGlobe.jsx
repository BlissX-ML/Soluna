import { useContext } from "react";
import { RECAP_NAV } from "../../../Data/recap.js";
import Glob from "./Glob.jsx";
import classes from './MemoGlobe.module.css'
import { recapAsideContext } from "../../../store/RecapAsideManageContext.jsx";
import { useNavigate } from "react-router-dom";

export default function MemoGlobe() {
    const ctx = useContext(recapAsideContext);
    const navigate = useNavigate()

    function handleClick(key) {
        ctx.setActiveKey(key);
        navigate('/recap')
    }

    return (
        <main className={classes.memoGlobe}>
            {RECAP_NAV.map(els => (
                <Glob delay={els.delayTime} key={els.key} handleClick={() => handleClick(els.key)}>
                    {els.title}
                </Glob>
            ))}
        </main>
    )
}