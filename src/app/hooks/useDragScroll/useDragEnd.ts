export const useDragEnd = (setIsDragging: (value: boolean) => void) => () => {
    setIsDragging(false);
};
