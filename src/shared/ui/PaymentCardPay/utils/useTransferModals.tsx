import { useModal } from '@/app/hooks/useModal';

export const useTransferModals = () => {
    const payCardQrModal = useModal();
    const payCardAutoModal = useModal();
    const payCardTelephoneModal = useModal();

    const modalActions = {
        payCardQr: payCardQrModal.openModal,
        payCardAuto: payCardAutoModal.openModal,
        payCardTelephone: payCardTelephoneModal.openModal,
    };

    return {
        modalActions,
        modals: {
            payCardQrModal,
            payCardAutoModal,
            payCardTelephoneModal,
        },
    };
};
