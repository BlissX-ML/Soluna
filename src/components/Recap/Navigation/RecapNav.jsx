import classes from './RecapNav.module.css'
import CategoryTitle from '../Category/CategoryTitle.jsx'

export default function RecapNav() {
    return (
        <aside className={classes.aside}>
            <ul>
                <CategoryTitle />
            </ul>
        </aside>
    )
}