import { useContext } from "react";
import { CardContext } from "../../../store/knowledgeCardContext.js";

export default function CardAsk({ ask, btn, icon }) {
    const ctx = useContext(CardContext);

    return (
        <div className={ask}>
            <h3>隐藏 HTML 元素的方法?</h3>
            <button onClick={ctx.changeVisible} className={btn}>
                <ctx.icon className={icon} />
            </button>
        </div>
    )
}