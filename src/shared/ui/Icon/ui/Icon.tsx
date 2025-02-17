import type { ComponentClass, FunctionComponent } from 'react';
import { createElement } from 'react';

interface IIconProps {
    component:
        | string
        | FunctionComponent<{ className: string | undefined }>
        | ComponentClass<{ className: string | undefined }, any>;
    className?: string;
}

export const Icon = ({ component, className }: IIconProps) => createElement(component, { className });
