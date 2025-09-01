
import { useContext } from 'react';
import { COMPLETE_ITEMS, TODO_ITEMS } from '../../../Data/plans.js';
import FiledSetContent from './FiledSetContent.jsx';
import FiledSetTitle from './FiledSetTitle.jsx';
import classes from './Todos.module.css';
import { TodosContext } from '../../../store/TodosManagaeContext.jsx';

import IELTS from '../../../Articles/Plans/Todos/IELTSTest.mdx';

export default function Todos() {
    const ctx = useContext(TodosContext);
    console.log(ctx.activeContent)
    const ActiveComp = ctx.activeContent

    return (
        <div className={classes.todos}>
            <div className={classes.todosItems}>
                <fieldset className={classes.future}>
                    <FiledSetTitle>未来计划</FiledSetTitle>
                    <FiledSetContent items={TODO_ITEMS} />
                </fieldset>

                <fieldset className={classes.fulfilled}>
                    <FiledSetTitle>已完成计划</FiledSetTitle>
                    <FiledSetContent items={COMPLETE_ITEMS} />
                </fieldset>
            </div>

            <div className={classes.todoContent}>
                {ctx.activeState && ActiveComp}
                {/* <IELTS /> */}
            </div>
        </div>
    )
}