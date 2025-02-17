export const useCacheHandler = () => {
    const getCacheKeys = async (): Promise<string[]> => {
        const cache = await caches.open('user-files-cache');
        const cachedFiles = await cache.keys();

        return cachedFiles.map((request) => request.url.split('/').pop() || '');
    };

    const addFileToCache = async (file: File) => {
        const cache = await caches.open('user-files-cache');
        const fileUrl = `${window.location.origin}/user-files/${file.name}`;
        // eslint-disable-next-line @typescript-eslint/naming-convention
        const response = new Response(file, { headers: { 'Content-Type': file.type } });
        await cache.put(fileUrl, response);
    };

    const downloadFileFromCache = async (fileName: string) => {
        const fileUrl = `${window.location.origin}/user-files/${fileName}`;
        const cache = await caches.open('user-files-cache');
        const cachedResponse = await cache.match(fileUrl);

        if (!cachedResponse) {
            console.log('Файл не найден в кэше');

            return;
        }

        const blob = await cachedResponse.blob();
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = fileName;
        link.click();
    };

    return { getCacheKeys, addFileToCache, downloadFileFromCache };
};
