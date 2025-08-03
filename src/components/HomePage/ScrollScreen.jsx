// 1. 图片的路径没有确定，预计存在多种图片，点击时进行跳跃:[{src, description}, {src, description}]
// 2. 左箭头和右箭头的点击更换功能，滑动图片的动态效果
// 3. 自动播放图片（2s）✅ ->  点击之后取消自动播放 + 收取当前图片索引 -> 6s内没有点击，更新图片自动滑动
// 4. 此组件与HomePage联动
// 5. 两个箭头和文字介绍同时滑动，最好保持箭头不动呢 ✅

import classes from './ScrollScreen.module.css'

export default function ScrollScreen({ images, curInd }) {

    function leftArrowHandle() { }

    function rightArrowHandle() { }

    // 实现图片移动的关键 ✔
    let moveImage = {
        transform: `translateX(-${curInd * 100}%)`,
        transition: 'transform 0.5s ease',
        width: `${images.length * 100}%`
    };

    return (
        // `flex` 与 `hidden` 是必要的 ✔✔✔
        <main className={classes.carousel} >

            <button className={classes.leftBtn} onClick={leftArrowHandle}>
                <span className={`${classes.arrow} ${classes.left}`}></span>
            </button>

            {/* `flex` 是必要的，同时作为包裹图片与文字的代码块，实现移动的 style 要安放在这里 ✔✔✔ */}
            <div className={classes.inner} style={moveImage}>
                {images.map((img, i) => (
                    <div
                        key={i}
                        style={{ backgroundImage: `url(${img.src})` }}  // 图片作为块背景，而不是单纯的 <img />
                        className={classes.screen}
                    >
                        <div className={classes.content}>
                            <div className={classes.des}>
                                <h2>{img.title}</h2>
                                <p><i>{img.description}</i></p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <button className={classes.rightBtn} onClick={rightArrowHandle}>
                <span className={`${classes.arrow} ${classes.right}`}></span>
            </button>

        </main >
    )
}
