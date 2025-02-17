import cls from '../HistoryComponent.module.scss';

import { CardComponentPNG } from '@/shared/ui/HistoryComponent/CardComponentPNG/CardCopmonentForPNG';

interface IHistoryCardProps {
    id: string;
    icon: string;
    text: React.ReactNode;
    onClick: () => void;
    isNew: boolean;
}

export const HistoryCard = ({ id, icon, text, onClick, isNew }: IHistoryCardProps) => (
    <div key={id} onClick={onClick} className={cls.card}>
        <CardComponentPNG icon={icon} text={text} />
        {isNew && <div className={cls.newIndicator} />}
    </div>
);
