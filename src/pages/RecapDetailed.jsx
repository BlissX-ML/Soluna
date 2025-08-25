// 这个组件用来动态存放知识点的
//  <comp.summary /> 之后会动态替换

import DefaultContent from '../components/Recap/DefaultContent';
import { LEETCODE_SUMMARY } from '../Data/leetcode';
import classes from './RecapDetailed.module.css'

const comp = LEETCODE_SUMMARY[0];

export default function RecapDetailed() {
    return (
        <div className={classes.content}>
            {/* <comp.summary /> */}
            <DefaultContent />
        </div>
    )
}