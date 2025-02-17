import { Plus } from '../assets/Plus';

import cls from './AddDocumentButton.module.scss';

import { useCacheHandler } from '@/app/hooks/useCacheHandler';
import { useSelectFile } from '@/app/hooks/useSelectFile';
import { InvisibleInput } from '@/shared/ui/InvisibleInput';

export const AddDocumentButton = () => {
    const { getCacheKeys, addFileToCache } = useCacheHandler();
    const { fileInputRef, openFilePicker, handleFileChange } = useSelectFile(addFileToCache, getCacheKeys);

    return (
        <button className={cls.addDocumentButton} onClick={openFilePicker}>
            <div className={cls.icon}>
                <Plus />
            </div>
            <p className={cls.title}>Добавить документ</p>
            <InvisibleInput fileInputRef={fileInputRef} handleFileChange={handleFileChange} />
        </button>
    );
};
