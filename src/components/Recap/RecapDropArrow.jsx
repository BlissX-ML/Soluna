import classes from './RecapDropArrow.module.css'
import { ICONS } from '../../Data/homePage';

export default function RecapDropArrow({ drop, onChange }) {
    const Icon = drop ? ICONS.arrowUp : ICONS.arrowDown;

    return (
        <div className={classes.nav}>
            <button className={classes.btn} onClick={() => onChange(!drop)}>
                <Icon className={classes.arrow} />
            </button>
        </div>

    )
}