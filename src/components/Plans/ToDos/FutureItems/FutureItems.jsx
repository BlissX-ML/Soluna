import { useContext } from "react";

import classes from './FutureItems.module.css'

import FutureItemsIntro from "./FutureItemsIntro";
import { TodosContext } from "../../../../store/TodosManagaeContext.jsx";

export default function FutureItems({ slot }) {
    const ctx = useContext(TodosContext);
    const section = slot === 'future' ? ctx.future : ctx.done;
    // console.log(ctx.activeContent)

    return (
        <div className={classes.todoContent}>
            {section.active ? section.content : <FutureItemsIntro />}
        </div>
    )
}