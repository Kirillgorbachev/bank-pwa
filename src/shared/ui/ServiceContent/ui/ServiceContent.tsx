import './ServiceContent.scss';

import { TitleComponent } from '@/shared/ui/Title';

interface IServiceContentProps {
    icon: React.ReactNode;
    title: string;
    subtitle?: string;
    message: string;
}

export const ServiceContent = ({ icon, title, subtitle = '', message }: IServiceContentProps) => (
    <div className="service-content">
        <div className="service-icon-wrapper">{icon}</div>
        <TitleComponent text={title} />
        {subtitle && <span>{subtitle}</span>}
        <p className={subtitle ? 'subtitle-present' : ''}>{message}</p>
    </div>
);
