import { useState } from 'react';
import classNames from 'classnames';

import cls from './ThemeSwitch.module.scss';

type TTheme = 'light' | 'dark';

export const ThemeSwitch = () => {
    // TODO без реализации переключения темы (с помощью useContext, т.к. необходимо перерисовать все приложение)
    const [theme, setTheme] = useState<TTheme>('light');

    const handleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <div className={cls.themeSwitch}>
            <h3 className={cls.title}>{theme === 'light' ? 'Тёмная тема' : 'Светлая тема'}</h3>
            <div className={cls.toggle}>
                <label htmlFor="light" className={cls.label}>
                    <input type="radio" name="theme" id="light" onChange={handleTheme} />
                </label>

                <label htmlFor="dark" className={cls.label}>
                    <input type="radio" name="theme" id="dark" onChange={handleTheme} />
                </label>

                <div className={classNames(cls.ellipse, cls[theme])}></div>
            </div>
        </div>
    );
};
