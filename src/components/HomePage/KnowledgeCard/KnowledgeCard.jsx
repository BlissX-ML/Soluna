import { useState } from 'react'
import classes from './KnowledgeCard.module.css'
import { ICONS } from '../../../Data/homePage';
import Titles from '../Titles';

export default function KnowledgeCard() {
    const [visibility, setVisibility] = useState(false);

    function handleBtnVisible() { setVisibility(!visibility) }

    return (
        <>
            <Titles>Questions?</Titles>
            <main className={classes.cardPart}>

                <div className={classes.left}>
                    <h3>每日一问</h3>
                    <p>Are you ready to answer today&apos;s question?</p>
                </div>
                <div className={classes.right}>
                    <p className={classes.ask}>
                        <h3>隐藏 HTML 元素的方法?</h3>
                        <button onClick={handleBtnVisible} className={classes.btn}>
                            {visibility && <img src={ICONS.eyeOpen} />}
                            {!visibility && <img src={ICONS.eyeClose} />}
                        </button>
                    </p>

                    <div className={visibility ? `${classes.answer} ${classes.show}` : `${classes.answer}`}>
                        <div className={classes.detailedAns}>
                            <p>1. CSS: `display` 属性</p>
                            <p>2. CSS: `visibility` 属性</p>
                            <p>3. CSS: `opacity` 属性 + `pointer-events: none`</p>
                            <p>4. position 移出视口</p>
                            <p>5. clip-path 裁剪</p>
                            <p>……</p>
                        </div>
                    </div>
                </div>
            </main>
        </>

    )
}