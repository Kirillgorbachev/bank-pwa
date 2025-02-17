import { StoriesContainer } from './StoriesContainer';

import { NextStoryButton } from './types/NextStoryButton';

import cls from './StoriesComponent.module.scss';

import { CloseModalButton } from '@/shared/ui/CloseModalButton';
import type { IStoriesModalProps } from '@/shared/ui/HistoryComponent/Stories/ui/types/StoriesModal.types';

export const StoriesModal = ({
    show,
    currentIndex,
    storiesData,
    onClose,
    onAllStoriesEnd,
    setCurrentIndex,
}: IStoriesModalProps) => {
    if (!show) return null;

    const handleNextStory = () => {
        const nextIndex = currentIndex + 1 < storiesData.length ? currentIndex + 1 : 0;
        setCurrentIndex(nextIndex);
    };

    return (
        <div className={cls.modal}>
            <div className={cls.storiesContainer}>
                <StoriesContainer
                    storiesData={storiesData}
                    currentIndex={currentIndex}
                    onAllStoriesEnd={onAllStoriesEnd}
                />
                <CloseModalButton onClick={onClose} className={cls.closeButton} />
                <NextStoryButton onClick={handleNextStory} />
            </div>
        </div>
    );
};
