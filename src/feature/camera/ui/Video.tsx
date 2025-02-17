import { useEffect, useState } from 'react';

import { getVideoHeight } from '../utils/getVideoHeight';

import cls from './Camera.module.scss';

interface IVideoProps {
    width: number;
    videoRef: React.RefObject<HTMLVideoElement>;
    canvasRef: React.RefObject<HTMLCanvasElement>;
}

export const Video = ({ width, videoRef, canvasRef }: IVideoProps) => {
    const [streaming, setStreaming] = useState<boolean>(false);

    useEffect(() => {
        const currentVideoRef = videoRef.current;

        const setupVideoStream = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });

                if (currentVideoRef) {
                    currentVideoRef.srcObject = stream;
                }
            } catch (error) {
                console.error('Error accessing the webcam:', error);
            }
        };

        setupVideoStream();

        return () => {
            if (currentVideoRef) {
                const stream = currentVideoRef.srcObject as MediaStream;
                const tracks = stream?.getTracks();
                tracks?.forEach((track) => track.stop());
            }
        };
    }, [videoRef]);

    const videoCanPlay = () => {
        if (!streaming) {
            const currentHeight = getVideoHeight(width, videoRef);

            videoRef.current?.setAttribute('width', `${width}px`);
            videoRef.current?.setAttribute('height', `${currentHeight}px`);
            canvasRef.current?.setAttribute('width', `${width}px`);
            canvasRef.current?.setAttribute('height', `${currentHeight}px`);
            setStreaming(true);
        }
    };

    return (
        <>
            <div className={cls.camera}>
                <video ref={videoRef} autoPlay onCanPlay={videoCanPlay}>
                    Камера недоступна
                </video>
            </div>
            <canvas className={cls.canvas} id="canvas" ref={canvasRef}></canvas>
        </>
    );
};
