import { useContext } from "react"
import { TodosContext } from "../../../store/TodosManagaeContext.jsx"


export default function FiledSetContent({ items }) {
    const ctx = useContext(TodosContext)

    return (
        <div>
            <ul>
                {items.map(item => (
                    <li key={item.key} onClick={() => ctx.changeItem(item)}>
                        {item.title}
                    </li>
                ))}
            </ul>
        </div>
    )
}