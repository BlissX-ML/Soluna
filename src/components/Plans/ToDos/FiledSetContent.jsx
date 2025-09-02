import { useContext } from "react"
import { TodosContext } from "../../../store/TodosManagaeContext.jsx"
import classes from './FiledSetContent.module.css'


export default function FiledSetContent({ items }) {
    const ctx = useContext(TodosContext)

    const activeKey = ctx.activeItem?.key ?? '';
    // console.log(activeKey)

    return (
        <div>
            <ul>
                {items.map(item => (
                    <li
                        key={item.key}
                        onClick={() => ctx.changeItem(item)}
                        className={`${classes.li} ${activeKey === item.key ? classes.active : ''}`}
                    >
                        {item.title}
                    </li>
                ))}
            </ul>
        </div>
    )
}