import './ButtonAddFile.scss';

import { useCacheHandler } from '@/app/hooks/useCacheHandler';
import { useChat } from '@/app/hooks/useChat';
import { useSelectFile } from '@/app/hooks/useSelectFile';
import { AddFileIcon } from '@/shared/assets/icons/AddFileIcon';
import { InvisibleInput } from '@/shared/ui/InvisibleInput';

export const ButtonAddFile = () => {
    const { getCacheKeys, addFileToCache } = useCacheHandler();
    const { fileInputRef, openFilePicker, handleFileChange } = useSelectFile(addFileToCache, getCacheKeys);
    const { addLocalMessage } = useChat();

    const handleFileSelection = async (event: React.ChangeEvent<HTMLInputElement>) => {
        await handleFileChange(event);
        addLocalMessage(event);
    };

    return (
        <div className="chat-button-add-container">
            <button className="button-add-file" onClick={openFilePicker}>
                <AddFileIcon />
            </button>
            <InvisibleInput fileInputRef={fileInputRef} handleFileChange={handleFileSelection} />
        </div>
    );
};
