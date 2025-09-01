import { useRef } from 'react';
import CanvasLines from './CanvasLines';
import classes from './Welcome.module.css';
import Buttons from './Buttons';

export default function Welcome() {
    const container = useRef(null);

    return (
        <div className={classes.welcome} ref={container}>
            <CanvasLines containerRef={container} />
            <div className={classes.recommend}>
                <h2>Hi, 我是 BlissXML 👋</h2>
                <p>
                    <span>在这里，你会看到我的前端学习过程、个人项目和生活点滴。</span>
                    <span>学习与热爱，都在这里留下痕迹。</span>
                </p>
                <div className={classes.btns}>
                    <Buttons src='/plans'>计划表查阅</Buttons>
                    <Buttons src='/recap'>笔记查阅</Buttons>
                    <Buttons src='/footprint'>足迹查阅</Buttons>
                </div>
            </div>
        </div>
    )
}