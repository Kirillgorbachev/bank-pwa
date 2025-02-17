import './FileButton.scss';

import { useCacheHandler } from '@/app/hooks/useCacheHandler';
import { FileIcon } from '@/shared/assets/icons/FileIcon';

interface IFileButton {
    msg: string;
}

export const FileButton = ({ msg }: IFileButton) => {
    const { downloadFileFromCache } = useCacheHandler();

    return (
        <div className="file-icon-container">
            <button className="file-icon-block" onClick={() => downloadFileFromCache(msg)}>
                <div className="file-icon-message">
                    <FileIcon />
                </div>
            </button>
        </div>
    );
};
