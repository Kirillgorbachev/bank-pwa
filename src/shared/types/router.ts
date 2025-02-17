import type { RouteProps } from 'react-router-dom';

export type TAppRoutesProps = RouteProps & {
    authOnly?: boolean;
    redirectFrom?: string;
    nestedRoutes?: Record<string, TAppRoutesProps>;
};
