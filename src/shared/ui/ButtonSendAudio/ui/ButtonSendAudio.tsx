import { useState } from 'react';

import './ButtonSendAudio.scss';

import { useAudioRecord } from '@/app/hooks/useAudioRecord';
import { useCacheHandler } from '@/app/hooks/useCacheHandler';
import { useChat } from '@/app/hooks/useChat';
import { AudioIcon } from '@/shared/assets/icons/AudioIcon';
import { PauseIcon } from '@/shared/assets/icons/PauseIcon';

export const ButtonSendAudio = () => {
    const { sendAudioMessage } = useChat();
    const { getCacheKeys, addFileToCache } = useCacheHandler();
    const { recordAudio } = useAudioRecord(addFileToCache, getCacheKeys);
    const [isRecording, setIsRecording] = useState(false);
    const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);

    const startRecording = async () => {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const recorder = new MediaRecorder(stream);
        const audioChunks: Blob[] = [];

        recorder.ondataavailable = (event) => {
            audioChunks.push(event.data);
        };

        recorder.onstop = async () => {
            const audioBlob = new Blob(audioChunks, { type: 'audio/webm' });
            const audioFile = await recordAudio(audioBlob);
            await sendAudioMessage(audioFile);
        };

        recorder.start();
        setMediaRecorder(recorder);
        setIsRecording(true);
    };

    const stopRecording = () => {
        mediaRecorder?.stop();
        setIsRecording(false);
    };

    return (
        <div className="button-send-audio-container">
            <button className="button-send-audio" onClick={isRecording ? stopRecording : startRecording}>
                {isRecording ? <PauseIcon /> : <AudioIcon />}
            </button>
        </div>
    );
};
