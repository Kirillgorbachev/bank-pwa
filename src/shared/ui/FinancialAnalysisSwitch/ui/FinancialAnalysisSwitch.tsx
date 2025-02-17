// import { useState } from 'react';

import styles from './FinancialAnalysisSwitch.module.scss';

interface IFinancialAnalysisSwitchProps {
    selectedType: 'wastes' | 'deposits';
    onToggle: (type: 'wastes' | 'deposits') => void;
}

export const FinancialAnalysisSwitch = ({ selectedType, onToggle }: IFinancialAnalysisSwitchProps) => (
    <div className={styles.financialAnalysisSwitch}>
        <button onClick={() => onToggle('wastes')} className={selectedType === 'wastes' ? styles.active : ''}>
            Траты
        </button>
        <button onClick={() => onToggle('deposits')} className={selectedType === 'deposits' ? styles.active : ''}>
            Зачисления
        </button>
    </div>
);
