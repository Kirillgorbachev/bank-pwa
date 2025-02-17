import { IconArrow } from '@/shared/ui/ButtonDownloadApp/icons/icon-arrow';

import cls from '../StoriesComponent.module.scss';

interface INextStoryButtonProps {
    onClick: () => void;
}

export const NextStoryButton = ({ onClick }: INextStoryButtonProps) => (
    <div className={cls.iconWrapper} onClick={onClick}>
        <IconArrow className={cls.iconArrow} />
    </div>
);
