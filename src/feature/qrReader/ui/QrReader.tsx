import { useEffect, useRef } from 'react';

import { useAppDispatch } from '@/app/hooks/useAppDispatch';

import { useQrReader } from '../model/useQrReader';

import cls from './QrReader.module.scss';

import { setAmount } from '@/feature/payCardQrModal/model/payQrCodeSlice';

export const QrReader = () => {
    const dispatch = useAppDispatch();
    const videoRef = useRef<HTMLVideoElement>(null);
    const qrBoxRef = useRef<HTMLDivElement>(null);

    const { scannedResult, onError } = useQrReader(videoRef, qrBoxRef);

    useEffect(() => {
        const amount = scannedResult ? Number.parseFloat(scannedResult) : 0;
        dispatch(setAmount(amount));
    }, [dispatch, scannedResult]);

    return (
        <div className={cls.qrReader}>
            <video ref={videoRef}></video>
            <div ref={qrBoxRef} className={cls.qrBox}>
                {!videoRef?.current && <img src="" alt="Qr Frame" className={cls.qrFrame} onError={onError} />}
            </div>
            {scannedResult && (
                <>
                    <div className={cls.resultWrapper}></div>
                    <p className={cls.result}>{scannedResult}</p>
                </>
            )}
        </div>
    );
};
