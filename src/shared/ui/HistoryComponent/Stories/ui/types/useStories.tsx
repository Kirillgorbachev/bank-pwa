import { useState } from 'react';

export const useStories = () => {
    const [showStories, setShowStories] = useState(false);
    const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

    const openStories = (index: number) => {
        setCurrentStoryIndex(index);
        setShowStories(true);
    };

    const closeStories = () => {
        setShowStories(false);
        setCurrentStoryIndex(0);
    };

    return {
        showStories,
        currentStoryIndex,
        setCurrentStoryIndex,
        openStories,
        closeStories,
    };
};
