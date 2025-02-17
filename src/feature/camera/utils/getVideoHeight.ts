export const getVideoHeight = (width: number, videoRef: React.RefObject<HTMLVideoElement>) =>
    Number(videoRef.current?.videoHeight) / (Number(videoRef.current?.videoWidth) / width);
