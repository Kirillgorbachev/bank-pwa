import { SoonAppearPage } from '@/shared/ui/SoonAppearPage/ui/SoonAppearPage';

import { CardTransferForm } from '@/feature/cardTransfer/ui/CardTransferForm';
import { PhoneTransferForm } from '@/feature/phoneTransfer/ui/Form/PhoneTransferForm';

interface IModalFormsProps {
    modals: {
        transferBetweenAccountsModal: { isOpen: boolean; closeModal: () => void };
        phoneTransferModal: { isOpen: boolean; closeModal: () => void };
        transferCardDetailsModal: { isOpen: boolean; closeModal: () => void };
    };
}

export const ModalForms = ({ modals }: IModalFormsProps) => (
    <>
        <CardTransferForm
            isModalOpen={modals.transferBetweenAccountsModal.isOpen}
            closeModal={modals.transferBetweenAccountsModal.closeModal}
        />
        <PhoneTransferForm
            isModalOpen={modals.phoneTransferModal.isOpen}
            closeModal={modals.phoneTransferModal.closeModal}
        />
        <SoonAppearPage
            isModalOpen={modals.transferCardDetailsModal.isOpen}
            closeModal={modals.transferCardDetailsModal.closeModal}
        />
    </>
);
