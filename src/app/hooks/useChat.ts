import { useState } from 'react';

import { useAppDispatch } from '@/app/hooks/useAppDispatch';

import { getCurrentDate } from '@/app/utils/getCurrentDate';
import { getCurrentTime } from '@/app/utils/getCurrentTime';
import { type IChat, useGetMessagesQuery, useSendMessageMutation } from '@/feature/chat/api/ChatApi';
import { addMessage } from '@/feature/chat/model/ChatSlice';

export const useChat = () => {
    const { data: messages = [] } = useGetMessagesQuery();
    const [sendMessage] = useSendMessageMutation();
    const [localMessages, setLocalMessages] = useState<IChat[]>([]);
    const [messageInput, setMessageInput] = useState<string>('');
    const [visible, setIsVisible] = useState(true);
    const dispatch = useAppDispatch();

    const hideMessageForm = () => setIsVisible(false);

    const createMessage = (content: string, sender: string = 'Me'): IChat => ({
        id: `${Date.now()}`,
        content,
        sender,
        direction: 'outgoing',
        timestamp: getCurrentTime(),
        date: getCurrentDate(),
    });

    const sendAudioMessage = async (file: File) => {
        const audioMessage = createMessage(file.name, 'Me');
        setLocalMessages((prev) => [...prev, audioMessage]);
        await sendMessageHandler(audioMessage);
    };

    const sendMessageHandler = async (message: IChat) => {
        const safeMessage = { ...message, content: message.content.toString() };
        dispatch(addMessage(safeMessage));
        await sendMessage(safeMessage);
    };

    const handleSend = async (messageText?: string) => {
        const textMessage = messageText || messageInput.trim();
        if (!textMessage) return;

        const newMessage = createMessage(textMessage);
        await sendMessageHandler(newMessage);
        setMessageInput('');
        hideMessageForm();
    };

    const addLocalMessage = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (!files) return;

        const newMessages = Array.from(files).map((file) => createMessage(file.name));

        setLocalMessages((prev) => [...prev, ...newMessages]);

        await Promise.all(newMessages.map((message) => sendMessageHandler(message)));

        setMessageInput('');
        hideMessageForm();
    };

    return {
        messages: [...messages, ...localMessages],
        messageInput,
        setMessageInput,
        handleSend,
        addLocalMessage,
        visible,
        hideMessageForm,
        sendAudioMessage,
    };
};
