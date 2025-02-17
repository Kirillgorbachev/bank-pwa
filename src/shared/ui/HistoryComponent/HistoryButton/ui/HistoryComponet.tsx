import cls from './HistoryComponent.module.scss';

import { HistoryCard } from '@/shared/ui/HistoryComponent/HistoryButton/ui/components/CardComponent';
import { cardsData } from '@/shared/ui/HistoryComponent/HistoryButton/ui/components/cardsData';
import { useViewedStories } from '@/shared/ui/HistoryComponent/HistoryButton/ui/components/useViewedStories';
import storiesImageOne from '@/shared/ui/HistoryComponent/Stories/images/stories-1.png';
import storiesImageTwo from '@/shared/ui/HistoryComponent/Stories/images/stories-2.png';
import storiesImageThree from '@/shared/ui/HistoryComponent/Stories/images/stories-3.png';
import { StoriesModal } from '@/shared/ui/HistoryComponent/Stories/ui/StoriesComponets';
import { useStories } from '@/shared/ui/HistoryComponent/Stories/ui/types/useStories';

const storiesData = [{ url: storiesImageOne }, { url: storiesImageTwo }, { url: storiesImageThree }];

export const HistoryComponent = () => {
    const { showStories, currentStoryIndex, setCurrentStoryIndex, openStories, closeStories } = useStories();

    const { viewedStories, markAsViewed } = useViewedStories(cardsData.length);

    const handleCardClick = (index: number) => {
        openStories(index);
        markAsViewed(index);
    };

    return (
        <div>
            <div className={cls.cardContainer}>
                {cardsData.map((card, index) => (
                    <HistoryCard
                        key={card.id}
                        id={card.id}
                        icon={card.icon}
                        text={card.text}
                        onClick={() => handleCardClick(index)}
                        isNew={!viewedStories[index]}
                    />
                ))}
            </div>

            <StoriesModal
                show={showStories}
                currentIndex={currentStoryIndex}
                storiesData={storiesData}
                onClose={closeStories}
                onAllStoriesEnd={closeStories}
                setCurrentIndex={setCurrentStoryIndex}
            />
        </div>
    );
};
