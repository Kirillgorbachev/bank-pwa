import { useState } from 'react';

export const useViewedStories = (initialCount: number) => {
    const [viewedStories, setViewedStories] = useState<boolean[]>(Array(initialCount).fill(false));

    const markAsViewed = (index: number) => {
        setViewedStories((prevState) => {
            const updatedState = [...prevState];
            updatedState[index] = true;

            return updatedState;
        });
    };

    return {
        viewedStories,
        markAsViewed,
    };
};
