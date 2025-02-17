import type { RefObject } from 'react';

interface IInvisibleInput {
    fileInputRef: RefObject<HTMLInputElement>;
    handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InvisibleInput = ({ fileInputRef, handleFileChange }: IInvisibleInput) => (
    <input type="file" accept="*" ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileChange} />
);
