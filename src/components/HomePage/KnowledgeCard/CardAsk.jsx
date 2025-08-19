import { ICONS } from "../../../Data/homePage";

export default function CardAsk({ ask, btn, visibleState, visibleHandle }) {
    return (
        <div className={ask}>
            <h3>隐藏 HTML 元素的方法?</h3>
            <button onClick={visibleHandle} className={btn}>
                {visibleState && <img src={ICONS.eyeOpen} />}
                {!visibleState && <img src={ICONS.eyeClose} />}
            </button>
        </div>
    )
}