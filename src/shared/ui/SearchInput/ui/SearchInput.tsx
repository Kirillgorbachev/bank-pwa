import { useState } from 'react';

import cls from './SearchInput.module.scss';

import { Search } from '@/shared/assets/icons/Search';

export const SearchInput = () => {
    const [targetValue, setTargetValue] = useState('');

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTargetValue(e.target.value);
    };

    return (
        <label htmlFor="searchInput" className={cls.label}>
            <Search />
            <input
                type="search"
                className={cls.input}
                id="searchInput"
                name="searchInput"
                value={targetValue}
                placeholder="Поиск"
                onChange={onChange}
            />
        </label>
    );
};
