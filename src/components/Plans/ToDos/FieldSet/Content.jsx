import { useContext } from "react"
import { TodosContext } from "../../../../store/TodosManagaeContext.jsx"
import classes from './Content.module.css'


export default function Content({ items, slot }) {
    const ctx = useContext(TodosContext)
    const section = slot === 'future' ? ctx.future : ctx.done;

    const activeKey = ctx.activeItem?.key ?? '';

    return (
        <div>
            <ul>
                {items.map(item => (
                    <li
                        key={item.key}
                        onClick={() => section.click(item)}
                        className={`${classes.li} ${activeKey === item.key ? classes.active : ''}`}
                    >
                        {item.title}
                    </li>
                ))}
            </ul>
        </div>
    )
}