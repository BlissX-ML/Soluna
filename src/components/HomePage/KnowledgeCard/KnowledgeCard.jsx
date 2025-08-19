import classes from './KnowledgeCard.module.css'

import Titles from '../Titles';
import CardAnswer from './CardAnswer';
import { useState } from 'react';
import CardAsk from './CardAsk';

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
                    <CardAsk
                        ask={classes.ask}
                        btn={classes.btn}
                        visibleState={visibility}
                        visibleHandle={handleBtnVisible}
                    />

                    <div className={visibility ? `${classes.answer} ${classes.show}` : `${classes.answer}`}>
                        <CardAnswer
                            ans={classes.detailedAns}
                        />
                    </div>
                </div>
            </main>
        </>

    )
}