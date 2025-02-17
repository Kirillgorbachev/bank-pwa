import { useOutletContext } from 'react-router-dom';

import { ButtonDownloadApp } from '@/shared/ui/ButtonDownloadApp/ui/Button/ButtonDownloadApp';

import './HomePage.scss';

import { useShowModalOnLogin } from '@/app/hooks/useShowModalOnLogin';
import { User } from '@/entities/user/ui/User';
import { PushNotification } from '@/feature/pushNotification/PushNotification';
import { BannerMainBtn } from '@/shared/ui/BannerMain/ui/BannerMainBtn';
import { BtnCreateCard } from '@/shared/ui/BtnCreateCard/ui/BtnCreateCard';
import { AddBtnCashbackFriends } from '@/shared/ui/ButtonFriendsCashback/ui/AddBtnCashbackFriends';
import { HistoryComponent } from '@/shared/ui/HistoryComponent';
import { ModalContentAndroid } from '@/shared/ui/ModalContentAndroid';
import { ModalContentIOS } from '@/shared/ui/ModalContentIOS';
import { SwiperComponent } from '@/shared/ui/Swiper';
import { TitleComponent } from '@/shared/ui/Title';

interface IContextType {
    onNotificationSent: () => void;
}

const HomePage = () => {
    const { onNotificationSent } = useOutletContext<IContextType>();
    const { isModalOpen, osName } = useShowModalOnLogin();

    return (
        <div className="main-container">
            <TitleComponent text="Главная" className="main-title" />
            <User className="user" />
            <HistoryComponent />
            <SwiperComponent />
            <BtnCreateCard />
            <BannerMainBtn />
            <AddBtnCashbackFriends />
            <ButtonDownloadApp />
            <PushNotification onNotificationSent={onNotificationSent} />
            {isModalOpen && osName === 'iOS' && <ModalContentIOS />}
            {isModalOpen && osName === 'AndroidOS' && <ModalContentAndroid />}
        </div>
    );
};

export default HomePage;
