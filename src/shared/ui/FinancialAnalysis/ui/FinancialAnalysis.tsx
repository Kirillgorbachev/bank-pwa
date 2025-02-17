import { useState } from 'react';

import cls from '@/shared/ui/FinancialAnalysis/ui/FinancialAnalysis.module.scss';

import { monthName } from '@/shared/const/month/month';
import { AnalysisTransaction } from '@/shared/ui/FinancialAnalysis/ui/AnalysisTransaction';
import { FinancialAnalysisSwitch } from '@/shared/ui/FinancialAnalysisSwitch';
import { MonthSelector } from '@/shared/ui/MonthSelector';
import { TitleComponent } from '@/shared/ui/Title';

export const FinancialAnalysis = () => {
    const [selectedType, setSelectedType] = useState<'wastes' | 'deposits'>('wastes');
    const [selectedMonth, setSelectedMonth] = useState<string>(
        `${monthName[new Date().getMonth()]} ${new Date().getFullYear()}`,
    );

    const handleToggle = (type: 'wastes' | 'deposits') => {
        setSelectedType(type);
    };

    const handleMonthChange = (month: string) => {
        setSelectedMonth(month);
    };

    return (
        <div>
            <TitleComponent text="Анализ финансов" />
            <div className={cls.mainContent}>
                <FinancialAnalysisSwitch selectedType={selectedType} onToggle={handleToggle} />
                <MonthSelector onMonthChange={handleMonthChange} />
                <AnalysisTransaction selectedType={selectedType} selectedMonth={selectedMonth} />
            </div>
        </div>
    );
};
