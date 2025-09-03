import classes from './Todos.module.css';

import { COMPLETE_ITEMS } from '../../../Data/completeItems.js';
import { TODO_ITEMS } from '../../../Data/futureItems.js';
import { TodosManagaeContext } from '../../../store/TodosManagaeContext.jsx';

import Legend from './FieldSet/Legend.jsx';
import Content from './FieldSet/Content.jsx';
import CompleteItems from './CompleteItems/CompleteItems.jsx';
import FutureItems from './FutureItems/FutureItems.jsx';


export default function Todos() {
    return (
        <div className={classes.todos}>
            <TodosManagaeContext key='future'>
                <div className={classes.futureItems}>
                    <fieldset>
                        <Legend>未来计划</Legend>
                        <Content items={TODO_ITEMS} slot='future' />
                    </fieldset>

                    <FutureItems slot='future' />
                </div>
            </TodosManagaeContext>


            <TodosManagaeContext key='done'>
                <div className={classes.completeItems} >
                    <fieldset>
                        <Legend>已完成计划</Legend>
                        <Content items={COMPLETE_ITEMS} slot='done' />
                    </fieldset>

                    <CompleteItems slot='done' />
                </div>
            </TodosManagaeContext>
        </div>
    )
}