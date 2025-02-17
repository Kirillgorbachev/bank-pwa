import type { ComponentClass, FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import { Icon } from '../../../shared/ui/Icon';

import cls from './MenuItem.module.scss';

interface IMenuItem {
    icon:
        | string
        | FunctionComponent<{ className: string | undefined }>
        | ComponentClass<{ className: string | undefined }, any>;
    name: string;
    link: string;
}

export const MenuItem = ({ icon, name, link }: IMenuItem) => (
    <div className={cls.menuItem}>
        <NavLink to={link} className={({ isActive }) => classNames(cls.link, isActive ? cls.active : '')}>
            <Icon component={icon} className={cls.icon} />
            <span className={cls.name}>{name}</span>
        </NavLink>
    </div>
);
