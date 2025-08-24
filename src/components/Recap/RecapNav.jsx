import { RECAP_NAV } from '../../Data/recap'
import classes from './RecapNav.module.css'
console.log(RECAP_NAV)
export default function RecapNav() {
    return (
        <aside className={classes.aside}>
            <ul>
                {RECAP_NAV.map((val) => (
                    <li key={val.key}>{val.title}</li>
                ))}
            </ul>
        </aside>
    )
}