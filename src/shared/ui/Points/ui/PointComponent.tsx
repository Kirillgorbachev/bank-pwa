import styles from './PointComponent.module.scss';

interface IPointsProps {
    points: number;
    accrualDate: string;
}

export const PointComponent = ({ points, accrualDate }: IPointsProps) => {
    const pointsText = points !== undefined && points >= 0 ? `${points} балла` : 'Нет данных';
    const accrualDateText = accrualDate ? `Зачислятся ${accrualDate}` : 'Дата не указана';

    return (
        <div className={styles.pointsBox}>
            <span className={styles.points}>{pointsText}</span>
            <span className={styles.accrualDate}>{accrualDateText}</span>
        </div>
    );
};
