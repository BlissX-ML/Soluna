import classes from './DropArrow.module.css'
import { ICONS } from '../../../Data/homePage.js';

export default function DropArrow({ drop, onChange }) {
    const Icon = drop ? ICONS.arrowUp : ICONS.arrowDown;

    return (
        <div className={classes.nav}>
            <button className={classes.btn} onClick={() => onChange(!drop)}>
                <Icon className={classes.arrow} />
            </button>
        </div>

    )
}