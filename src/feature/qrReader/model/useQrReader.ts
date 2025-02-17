import type { RefObject } from 'react';
import { useEffect, useRef, useState } from 'react';
// eslint-disable-next-line @typescript-eslint/naming-convention
import QrScanner from 'qr-scanner';

export const useQrReader = (videoRef: RefObject<HTMLVideoElement>, qrBoxRef: RefObject<HTMLDivElement>) => {
    const scanner = useRef<QrScanner>();

    const [qrOn, setQrOn] = useState<boolean>(true);
    const [scannedResult, setScannedResult] = useState<string | undefined>('');

    const onScanSuccess = (result: QrScanner.ScanResult) => {
        console.log(result);
        setScannedResult(result?.data);
    };

    const onScanFail = (err: string | Error) => {
        console.log(err);
    };

    const onError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        e.currentTarget.style.display = 'none';
    };

    useEffect(() => {
        if (videoRef?.current && !scanner.current) {
            scanner.current = new QrScanner(videoRef?.current, onScanSuccess, {
                onDecodeError: onScanFail,
                preferredCamera: 'environment',
                highlightScanRegion: true,
                highlightCodeOutline: true,
                overlay: qrBoxRef?.current || undefined,
            });

            scanner.current.setCamera('environment');

            scanner?.current
                ?.start()
                .then(() => setQrOn(true))
                .catch((err) => {
                    if (err) setQrOn(false);
                });
        }

        return () => {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            if (!videoRef.current) {
                scanner?.current?.stop();
            }
        };
    }, [qrBoxRef, videoRef]);

    useEffect(() => {
        if (!qrOn) {
            console.log(
                'Camera is blocked or not accessible. Please allow camera in your browser permissions and Reload.',
            );
        }
    }, [qrOn]);

    return { scannedResult, onError };
};
