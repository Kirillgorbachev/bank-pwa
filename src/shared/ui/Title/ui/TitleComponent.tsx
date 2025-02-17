import cn from 'classnames';

import styles from './TitleComponent.module.scss';

interface ITitleComponentProps {
    text: string;
    className?: string;
}
export const TitleComponent = ({ text, className }: ITitleComponentProps) => (
    <h2 className={cn(styles.title, className)}>{text}</h2>
);
