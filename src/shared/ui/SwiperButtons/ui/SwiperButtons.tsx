import './SwiperButtons.scss';

interface ISwiperButtonItem {
    id: number;
    name: string;
}

interface ISwiperButtonsProps {
    items: ISwiperButtonItem[];
    activeIndex: number;
    goToSlide: (index: number) => void;
}

export const SwiperButtons = ({ items, activeIndex, goToSlide }: ISwiperButtonsProps) => (
    <div className="swiper-buttons">
        {items.map((item) => (
            <button
                key={item.id}
                onClick={() => goToSlide(item.id)}
                className={activeIndex === item.id ? 'active' : ''}>
                {item.name}
            </button>
        ))}
    </div>
);
