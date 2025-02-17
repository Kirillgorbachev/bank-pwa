import { useLocation, useNavigate } from 'react-router-dom';
import classNames from 'classnames';

import { useAppDispatch } from '@/app/hooks/useAppDispatch';

import cls from './ExitButton.module.scss';

import { clearUserData } from '@/entities/user/model/UserSlice';
import { setLogout } from '@/feature/auth/model/AuthSlice';
import { Exit } from '@/shared/assets/icons/Exit';
import { routes } from '@/shared/const/router/router';

export const ExitButton = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const isProfilePage = location.pathname.includes(routes.profile);

    const exit = () => {
        dispatch(setLogout());
        dispatch(clearUserData());
        navigate(routes.login);
    };

    return (
        <div className={classNames(cls.exitButton, { [cls.profile]: isProfilePage })}>
            <button className={cls.button} onClick={exit}>
                <Exit className={cls.icon} />
                <div className={cls.text}>Выйти</div>
            </button>
        </div>
    );
};
