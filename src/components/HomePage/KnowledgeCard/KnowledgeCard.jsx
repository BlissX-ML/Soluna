import classes from './KnowledgeCard.module.css'
import { memo, useContext } from 'react';

import Titles from './Titles';
import CardAnswer from './CardAnswer';
import CardAsk from './CardAsk';
import { CardContext } from '../../../store/knowledgeCardContext';

function KnowledgeCard() {
    const ctx = useContext(CardContext);
    console.log(ctx.state)

    return (
        <>
            <Titles>Questions?</Titles>
            <main className={classes.cardPart}>

                <div className={classes.left}>
                    <h3>每日一问</h3>
                    <p>Are you ready to answer today&apos;s question?</p>
                </div>

                <div className={classes.right}>
                    <CardAsk ask={classes.ask} btn={classes.btn} icon={classes.icon} />

                    <div className={ctx.state ? `${classes.answer} ${classes.show}` : `${classes.answer}`}>
                        <CardAnswer
                            ans={classes.detailedAns}
                        />
                    </div>
                </div>
            </main>
        </>
    )
}

export default memo(KnowledgeCard)