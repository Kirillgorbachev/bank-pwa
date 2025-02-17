import { SoonAppearPage } from '@/shared/ui/SoonAppearPage/ui/SoonAppearPage';

import './AddButton.scss';

import { useModal } from '@/app/hooks/useModal';
import { AddIcon } from '@/shared/assets/icons/AddIcon';

export const AddButton = () => {
    const { isOpen: isSoonAppearOpen, openModal: openSoonAppearModal, closeModal: closeSoonAppearModal } = useModal();

    return (
        <>
            <button
                className="add-button"
                onClick={() => {
                    openSoonAppearModal();
                }}>
                <AddIcon />
            </button>
            <SoonAppearPage isModalOpen={isSoonAppearOpen} closeModal={closeSoonAppearModal} />
        </>
    );
};
