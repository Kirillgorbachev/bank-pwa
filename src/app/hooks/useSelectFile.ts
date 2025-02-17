import { useRef, useState } from 'react';

export const useSelectFile = (addFileToCache: (file: File) => Promise<void>, getCacheKeys: () => Promise<string[]>) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

    const openFilePicker = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (!files) return;

        const fileArray = Array.from(files);
        const existingFileNames = await getCacheKeys();
        const newFiles = fileArray.filter((file) => !existingFileNames.includes(file.name));

        if (newFiles.length === 0) {
            console.log('Файлы уже сохранены');

            return;
        }

        setSelectedFiles((prevFiles) => [...prevFiles, ...newFiles]);

        await Promise.all(newFiles.map((file) => addFileToCache(file)));

        console.log('Новые файлы сохранены в кэш');
    };

    return { fileInputRef, openFilePicker, handleFileChange, selectedFiles };
};
