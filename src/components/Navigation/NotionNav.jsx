import { useContext } from 'react';
import classes from './NotionNav.module.css'

import DropArrow from "../Recap/Drop/DropArrow.jsx";
import DropContent from "../Recap/Drop/DropContent.jsx";
import NavItems from "./NavItems.jsx";
import { recapAsideContext } from '../../store/RecapAsideManageContext.jsx';

export default function NotionNav() {
    const ctx = useContext(recapAsideContext);

    return (
        <>
            <div className={classes.items}>
                <NavItems path='/recap'>笔记</NavItems>
                <DropArrow drop={ctx.dropState} onChange={ctx.toggleDrop} />
            </div>
            <DropContent />
        </>
    )
}