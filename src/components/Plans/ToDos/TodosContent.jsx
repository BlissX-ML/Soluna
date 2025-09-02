import { useContext } from "react";
import { TodosContext } from "../../../store/TodosManagaeContext.jsx";

import classes from './TodosContent.module.css'
import SimpleIntro from "./SimpleIntro.jsx";

export default function TodosContent() {
    const ctx = useContext(TodosContext);
    console.log(ctx.activeContent)

    return (
        <div className={classes.todoContent}>
            {ctx.activeState ? ctx.activeContent : <SimpleIntro />}
        </div>
    )
}