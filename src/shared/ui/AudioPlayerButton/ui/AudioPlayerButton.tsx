import { useAudioRecord } from '@/app/hooks/useAudioRecord';
import { useCacheHandler } from '@/app/hooks/useCacheHandler';
import { PauseAudioIcon } from '@/shared/assets/icons/PauseAudioIcon';
import { PlayIcon } from '@/shared/assets/icons/PlayIcon';

export const AudioPlayerButton = ({ fileName }: { fileName: string }) => {
    const { getCacheKeys, addFileToCache } = useCacheHandler();
    const { handlePlayPause, isPlaying } = useAudioRecord(addFileToCache, getCacheKeys);

    return (
        <div className="file-icon-container">
            <button className="file-icon-block" onClick={() => handlePlayPause(fileName)}>
                <div className="file-icon-message">{isPlaying ? <PauseAudioIcon /> : <PlayIcon />}</div>
            </button>
        </div>
    );
};
