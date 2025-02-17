import { useRef, useState } from 'react';
import { A11y, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import 'swiper/scss';
import './SwiperComponent.scss';

import { useGetCardsQuery } from '@/entities/Card/api/CardsApi';
import { SwiperButtons } from '@/shared/ui/SwiperButtons';
import { SwiperContentAccount } from '@/shared/ui/SwiperContent';
import { SwiperContentCard } from '@/shared/ui/SwiperContent/ui/SwiperContentCard';
import { SwiperGoals } from '@/shared/ui/SwiperGoals';
import { useGetGoalsQuery } from '@/shared/ui/SwiperGoals/api/GoalsApi';

export const SwiperComponent = () => {
    const swiperRef = useRef<any>(null);
    const { data: cardOptions = [] } = useGetCardsQuery();
    const { data: goalsOptions = [] } = useGetGoalsQuery();
    const MULTIPLE_ACTIVE_SLIDE = 1.2;
    const DESKTOP_BREAKPOINT = '481';

    const [activeIndex, setActiveIndex] = useState(0);

    const filteredCards = cardOptions.filter((item) => ['Visa', 'Mastercard'].includes(item.value)).slice(0, 2);
    const filteredAccount = cardOptions.filter((item) => ['Card', 'Bank'].includes(item.value));

    const items = [
        { id: 0, name: 'Карты', component: <SwiperContentCard items={filteredCards} /> },
        { id: 1, name: 'Счета', component: <SwiperContentAccount items={filteredAccount} /> },
        { id: 2, name: 'Цели', component: <SwiperGoals goals={goalsOptions} /> },
    ];

    const goToSlide = (index: number) => {
        if (swiperRef?.current.swiper) {
            swiperRef.current.swiper.slideTo(index);
        }
    };

    return (
        <div className="swiper-container">
            <SwiperButtons items={items} activeIndex={activeIndex} goToSlide={goToSlide} />
            <Swiper
                className="sample-slider"
                modules={[Pagination, Scrollbar, A11y]}
                ref={swiperRef}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                slidesPerView={MULTIPLE_ACTIVE_SLIDE}
                spaceBetween={-23}
                centeredSlides
                breakpoints={{
                    [DESKTOP_BREAKPOINT]: {
                        slidesPerView: 1,
                        centeredSlides: false,
                        spaceBetween: -100,
                    },
                }}>
                {items.map((slide) => (
                    <SwiperSlide key={slide.id}>{slide.component}</SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
