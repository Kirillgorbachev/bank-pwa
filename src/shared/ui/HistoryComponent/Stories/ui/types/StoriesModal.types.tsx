export interface IStoriesModalProps {
    show: boolean;
    currentIndex: number;
    storiesData: { url: string }[];
    onClose: () => void;
    onAllStoriesEnd: () => void;
    setCurrentIndex: (index: number) => void;
}
