// eslint-disable-next-line @typescript-eslint/naming-convention
import Stories from 'react-insta-stories';

import cls from './StoriesComponent.module.scss';

interface IStoriesContainerProps {
    storiesData: { url: string }[];
    currentIndex: number;
    onAllStoriesEnd: () => void;
}

export const StoriesContainer = ({ storiesData, currentIndex, onAllStoriesEnd }: IStoriesContainerProps) => (
    <div className={cls.storiesWrapper}>
        <Stories
            stories={storiesData}
            currentIndex={currentIndex}
            onAllStoriesEnd={onAllStoriesEnd}
            defaultInterval={5000}
            width="100%"
            height="100%"
        />
    </div>
);
