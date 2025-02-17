import { useRef, useState } from 'react';

import { getVideoHeight } from '../utils/getVideoHeight';

import { Output } from './Output';
import { Video } from './Video';

import cls from './Camera.module.scss';

import { ButtonMain } from '@/shared/ui/ButtonMain';

export const Camera = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const outputRef = useRef<HTMLImageElement>(null);

    const width = 343;
    const [height, setHeight] = useState<number>(1);
    const [isPhotoTaken, setIsPhotoTaken] = useState<boolean>(false);

    const clearPhoto = () => {
        const context = canvasRef.current?.getContext('2d');

        if (context) {
            context.fillStyle = '#AAA';
            context.fillRect(0, 0, canvasRef.current?.width || 0, canvasRef.current?.height || 0);
        }

        const data = canvasRef.current?.toDataURL('image/png') || '';
        outputRef.current?.setAttribute('src', data);
    };

    const takePicture = () => {
        const context = canvasRef.current?.getContext('2d');
        const currentHeight = getVideoHeight(width, videoRef);

        setHeight(currentHeight);

        if (width && height) {
            canvasRef.current?.setAttribute('width', `${width}px`);
            canvasRef.current?.setAttribute('height', `${currentHeight}px`);
            context?.drawImage(videoRef.current as CanvasImageSource, 0, 0, width, currentHeight);
            const data = canvasRef.current?.toDataURL('image/png') || '';
            outputRef.current?.setAttribute('src', data);
        } else {
            clearPhoto();
        }

        setIsPhotoTaken(true);
    };

    return (
        <div className={cls.cameraContainer}>
            <Video width={width} videoRef={videoRef} canvasRef={canvasRef} />
            <ButtonMain title="Отсканируйте QR-код" isActive={!isPhotoTaken} onClick={takePicture} />
            <Output ref={outputRef} />
        </div>
    );
};
