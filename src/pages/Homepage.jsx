import CarouselImages from "../components/HomePage/Carousel/CarouselImages.jsx";
import KnowledgeCard from "../components/HomePage/KnowledgeCard/KnowledgeCard.jsx";
import MemoGlobe from "../components/HomePage/KnowledgeSphere/MemoGlobe.jsx";
import KnowledgeCardContext from "../store/knowledgeCardContext.jsx";

export default function Homepage() {
    return (
        <section>
            <CarouselImages />

            <KnowledgeCardContext>
                <KnowledgeCard />
            </KnowledgeCardContext>

            <MemoGlobe />

            <h1>Homepage</h1>
            <p>BlissXML\Soluna\src\pages\Homepage.js</p>
        </section>
    )
}