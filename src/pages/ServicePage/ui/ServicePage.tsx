import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import './ServicePage.scss';

import { ErrorSvgComponent } from '@/shared/assets/icons/ErrorSvgComponent';
import { TokenSvgComponent } from '@/shared/assets/icons/TokenSvgComponent';
import { ButtonMain } from '@/shared/ui/ButtonMain';
import { ServiceContent } from '@/shared/ui/ServiceContent';

interface IServicePageProps {
    token?: string;
    buttonWidth?: string;
    copyButtonText?: string;
    goHomeButtonText?: string;
}

interface IServiceContentPropsBase {
    icon: React.ReactNode;
    title: string;
    message: string;
}

type TServiceContentProps<T = string> = IServiceContentPropsBase & (T extends string ? { subtitle: string } : {});

const ServicePage = ({
    token = 'dksldjsjkjwewo3948349sn-0000ssssssssssssssssssssssssssaaaaaaaaaaaaaeeeeeeeeeeeewwwww0sd',
    copyButtonText = 'Скопировать',
    goHomeButtonText = 'Вернуться на главную',
}: IServicePageProps) => {
    const navigate = useNavigate();

    const goHome = () => {
        navigate('/');
    };

    const copyTextToClipboard = async () => {
        if (token) {
            try {
                await navigator.clipboard.writeText(token);
                toast.success('Токен скопирован!');
            } catch (err) {
                toast.error('Ошибка при копировании');
                console.error(err);
            }
        }
    };

    const contentPropsWithToken: TServiceContentProps<string> = {
        icon: <TokenSvgComponent />,
        title: 'FCM‐токен',
        subtitle: 'Этот токен используется для отправки push-уведомлений на ваше устройство',
        message: token,
    };

    const contentPropsWithoutToken: TServiceContentProps<undefined> = {
        icon: <ErrorSvgComponent />,
        title: 'Что-то пошло не так',
        message: 'FCM‐токен не найден',
    };

    const buttonProps = token
        ? { title: copyButtonText, onClick: copyTextToClipboard }
        : { title: goHomeButtonText, onClick: goHome };

    return (
        <div className="service-container">
            {token ? <ServiceContent {...contentPropsWithToken} /> : <ServiceContent {...contentPropsWithoutToken} />}
            <div className="container-button">
                <ButtonMain isActive {...buttonProps} />
            </div>
        </div>
    );
};

export default ServicePage;
