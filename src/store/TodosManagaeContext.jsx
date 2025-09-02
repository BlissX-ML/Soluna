import { createContext, useMemo, useState } from "react";
import mdxWrapper from "../mdxWrapper.jsx";
// import classes from '../../../Articles/Plans/Todos/mdxWrapperStyle.module.css'

export const TodosContext = createContext({
    activeItem: null,
    activeState: false,
    activeContent: null,
    changeItem: (item) => { },
})

export function TodosManagaeContext({ children }) {
    const [curActiveItem, setCurActiveItem] = useState(null);
    const [isActive, setIsActive] = useState(false);
    const [content, setContent] = useState(null);

    function handleClick(item) {
        setCurActiveItem({ ...item })
        setIsActive(true)

        const Comp = item.learnRoute
        setContent(Comp ? <Comp components={{ wrapper: mdxWrapper }} /> : null)
    }

    const ctx = useMemo(() => ({
        activeItem: curActiveItem,
        activeState: isActive,
        activeContent: content,
        changeItem: handleClick,
    }), [curActiveItem, isActive, content])

    return <TodosContext.Provider value={ctx}>{children}</TodosContext.Provider>
}