import { useModal } from '@/app/hooks/useModal';

export const useTransferModals = () => {
    const transferBetweenAccountsModal = useModal();
    const phoneTransferModal = useModal();
    const transferCardDetailsModal = useModal();

    const modalActions = {
        transferBetweenAccounts: transferBetweenAccountsModal.openModal,
        transfersCard: phoneTransferModal.openModal,
        transferCardDetails: transferCardDetailsModal.openModal,
    };

    return { modalActions, modals: { transferBetweenAccountsModal, phoneTransferModal, transferCardDetailsModal } };
};
