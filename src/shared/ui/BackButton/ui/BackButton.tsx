import { useNavigate } from 'react-router-dom';

import { ArrowToLeft } from '../assets/ArrowToLeft';

import cls from './BackButton.module.scss';

export const BackButton = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    return (
        <button className={cls.backButton} onClick={goBack}>
            <ArrowToLeft />
        </button>
    );
};
