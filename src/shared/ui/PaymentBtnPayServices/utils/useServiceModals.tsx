import { useModal } from '@/app/hooks/useModal';

export const useServiceModals = () => {
    const mobileModal = useModal();
    const internetModal = useModal();
    const comModal = useModal();
    const tvModal = useModal();
    const socialModal = useModal();
    const getCash = useModal();
    const askForCash = useModal();

    const modalActions = {
        servicesCardMobile: mobileModal.openModal,
        servicesCardInternet: internetModal.openModal,
        servicesCardCom: comModal.openModal,
        servicesCardTv: tvModal.openModal,
        servicesCardSocial: socialModal.openModal,
        actionsCardCash: getCash.openModal,
        actionsCardGetCash: askForCash.openModal,
    };

    return {
        modalActions,
        modals: { mobileModal, internetModal, comModal, tvModal, socialModal, getCash, askForCash },
    };
};
