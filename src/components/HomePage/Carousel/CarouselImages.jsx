import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import classes from './CarouselImages.module.css';
import { SCROLL_IMAGES } from '../../../Data/homePage.js';

export default function CarouselImages() {
    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay, A11y]}
            spaceBetween={30}
            slidesPerView={1}                  // 每次只展示 1 张，类似 slick
            navigation                         // 左右箭头
            pagination={{ clickable: true }}   // 小圆点
            autoplay={{
                delay: 5000,                   // 自动切换间隔
                disableOnInteraction: false,   // 用户操作后仍然自动轮播
            }}
            loop={true}                        // 无限循环（= slick 的 infinite）
            speed={500}                        // 切换动画速度
            onSlideChange={() => console.log('slide changed')}
            onSwiper={(swiper) => console.log('Swiper instance:', swiper)}
        >
            {SCROLL_IMAGES.map((img) => (
                <SwiperSlide key={img.key} className={classes.screen}
                    style={{ backgroundImage: `url(${img.src})` }}>
                    <div className={classes.content}>
                        <div className={classes.des}>
                            <h2>{img.title}</h2>
                            <p><i>{img.description}</i></p>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
