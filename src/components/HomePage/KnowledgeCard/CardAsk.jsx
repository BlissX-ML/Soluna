import { ICONS } from "../../../Data/homePage";

export default function CardAsk({ ask, btn, icon, visibleState, visibleHandle }) {
    const Icon = visibleState ? ICONS.eyeOpen : ICONS.eyeClose;

    return (
        <div className={ask}>
            <h3>隐藏 HTML 元素的方法?</h3>
            <button onClick={visibleHandle} className={btn}>
                <Icon className={icon} />
            </button>
        </div>
    )
}