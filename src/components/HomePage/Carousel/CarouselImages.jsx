import classes from './CarouselImages.module.css'
import Slider from 'react-slick';
import { SCROLL_IMAGES } from '../../../Data/homePage';

// 轮播图的 CSS 依赖
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CarouselImages() {

    const settings = {
        dots: true,
        infinite: true,      // 让 slick 自己做首尾克隆
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,        // 需要左右箭头就开
        adaptiveHeight: false,
        pauseOnHover: true,
    };

    return (

        <main className={classes.carousel}>
            <Slider {...settings}>
                {SCROLL_IMAGES.map((img, i) => (
                    <div key={i}>
                        <div
                            className={classes.screen}
                            style={{ backgroundImage: `url(${img.src})` }}
                        >
                            <div className={classes.content}>
                                <div className={classes.des}>
                                    <h2>{img.title}</h2>
                                    <p><i>{img.description}</i></p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </main >
    )
}