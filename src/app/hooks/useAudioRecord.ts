import { useCallback, useState } from 'react';

export const useAudioRecord = (
    addFileToCache: (file: File) => Promise<void>,
    getCacheKeys: () => Promise<string[]>,
) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

    const recordAudio = async (audioBlob: Blob) => {
        const fileName = `Голосовое сообщение.mp3`;
        const audioFile = new File([audioBlob], fileName, { type: 'audio/mp3' });
        const existingFileNames = await getCacheKeys();

        if (!existingFileNames.includes(fileName)) {
            await addFileToCache(audioFile);
            console.log(`Аудиофайл "${fileName}" успешно сохранён в кэш.`);
        } else {
            console.log(`Аудиофайл "${fileName}" уже существует в кэше.`);
        }

        return audioFile;
    };

    const getAudioFromCache = useCallback(async (fileName: string): Promise<Blob | null> => {
        const fileUrl = `${window.location.origin}/user-files/${fileName}`;
        const cache = await caches.open('user-files-cache');
        const cachedResponse = await cache.match(fileUrl);

        if (cachedResponse) {
            console.log(`Аудиофайл "${fileName}" найден в кэше.`);

            return cachedResponse.blob();
        } else {
            console.log(`Аудиофайл "${fileName}" не найден в кэше.`);

            return null;
        }
    }, []);

    const handlePlayPause = useCallback(
        async (fileName: string) => {
            // eslint-disable-next-line no-nested-ternary
            const action = isPlaying ? 'playing' : audio ? 'audioAvailable' : 'default';
            console.log(action);
            const actions: Record<string, () => Promise<void>> = {
                playing: async () => {
                    audio?.pause();
                    setIsPlaying(false);
                },
                audioAvailable: async () => {
                    if (audio) {
                        await audio.play();
                        setIsPlaying(true);
                    }
                },
                default: async () => {
                    const audioBlob = await getAudioFromCache(fileName);

                    if (!audioBlob) {
                        console.error(`Не удалось воспроизвести файл: ${fileName}`);

                        return;
                    }

                    const audioURL = URL.createObjectURL(audioBlob);
                    const newAudio = new Audio(audioURL);
                    newAudio.onended = () => setIsPlaying(false);

                    setAudio(newAudio);
                    await newAudio.play();
                    setIsPlaying(true);
                },
            };

            await actions[action]();
        },
        [audio, getAudioFromCache, isPlaying],
    );

    return { recordAudio, getAudioFromCache, handlePlayPause, isPlaying };
};
