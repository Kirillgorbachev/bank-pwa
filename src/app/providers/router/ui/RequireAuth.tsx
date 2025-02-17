import type { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { useAppSelector } from '@/app/hooks/useAppSelector';

import { routes } from '@/shared/const/router/router';

interface IRequireAuthProps {
    children: ReactNode;
}

export function RequireAuth({ children }: IRequireAuthProps) {
    const location = useLocation();
    const isAuth = useAppSelector((state) => state.auth.isLoggedIn);

    if (!isAuth) {
        return <Navigate to={routes.login} state={{ from: location }} replace />;
    }

    return children;
}
