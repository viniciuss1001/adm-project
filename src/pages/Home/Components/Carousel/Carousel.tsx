import img1 from './images/slider 1.jpg'
import img2 from './images/slider.jpg'
import img3 from './images/slider3.jpg'
import img4 from './images/slider4.jpg'
import img5 from './images/slider5.jpg'
import img6 from './images/slider6.jpg'
import img7 from './images/slider7.jpg'
import img8 from './images/slider8.jpg'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/scrollbar'
import 'swiper/modules'
import { CarouselContainer } from './Style'
import { Navigation, Pagination, Parallax, Scrollbar } from 'swiper/modules'

export function Carousel() {

     return (
          <CarouselContainer>
               <Swiper
                    modules={[Parallax, Carousel, Navigation, Pagination, Scrollbar]}
                    scrollbar={{
                         hide: true
                    }}
                    spaceBetween={25}
                    slidesPerView={2}
                    allowSlideNext
               >
                    <SwiperSlide>
                         <img src={img1} alt="Turma adm 2020" />
                    </SwiperSlide>
                    <SwiperSlide>
                         <img src={img2} alt="Turma adm 2020" />
                    </SwiperSlide>
                    <SwiperSlide>
                         <img src={img3} alt="Turma adm 2020" />
                    </SwiperSlide>
                    <SwiperSlide>
                         <img src={img4} alt="Turma adm 2020" />
                    </SwiperSlide>
                    <SwiperSlide>
                         <img src={img5} alt="Turma adm 2020" />
                    </SwiperSlide>
                    <SwiperSlide>
                         <img src={img6} alt="Turma adm 2020" />
                    </SwiperSlide>
                    <SwiperSlide>
                         <img src={img7} alt="Turma adm 2020" />
                    </SwiperSlide>
                    <SwiperSlide>
                         <img src={img8} alt="Turma adm 2020" />
                    </SwiperSlide>
               </Swiper>
          </CarouselContainer>
     )
}