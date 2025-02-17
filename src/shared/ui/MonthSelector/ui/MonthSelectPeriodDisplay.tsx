import { CloseIcon } from '@/shared/assets/icons/CloseIcon';
import { formatStringDate } from '@/shared/lib/formatDate';

interface IMonthPeriodDisplayProps {
    selectedPeriodFirst: string;
    selectedPeriodLast?: string;
    onClick: () => void;
}

export const MonthSelectPeriodDisplay = ({
    selectedPeriodFirst,
    selectedPeriodLast,
    onClick,
}: IMonthPeriodDisplayProps) => (
    <div>
        {selectedPeriodLast ? (
            <p>
                {formatStringDate(selectedPeriodFirst)}-{formatStringDate(selectedPeriodLast)}
            </p>
        ) : (
            <p>{formatStringDate(selectedPeriodFirst)}</p>
        )}
        <div onClick={onClick}>
            <CloseIcon />
        </div>
    </div>
);
