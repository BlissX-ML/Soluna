import { ICONS } from '../../../Data/icons.js';
import classes from './DropArrow.module.css'


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