// import CarouselImages from "../components/HomePage/Carousel/CarouselImages.jsx";
import classes from './Plan.module.css';

import { KnowledgeCardContext } from "../store/knowledgeCardContext.jsx";

import KnowledgeCard from "../components/Plans/KnowledgeCard/KnowledgeCard.jsx";
import MemoGlobe from "../components/Plans/KnowledgeSphere/MemoGlobe.jsx";
import Todos from "../components/Plans/ToDos/Todos.jsx";
import { TodosManagaeContext } from '../store/TodosManagaeContext.jsx';

export default function Plan() {
    return (
        <section className={classes.plans}>
            <TodosManagaeContext>
                <Todos />
            </TodosManagaeContext>


            <KnowledgeCardContext>
                <KnowledgeCard />
            </KnowledgeCardContext>

            <MemoGlobe />
            {/* <CarouselImages /> */}
        </section >
    )
}