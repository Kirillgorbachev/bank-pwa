import { ChatContainer, MainContainer, MessageInput, MessageList } from '@chatscope/chat-ui-kit-react';

import './ChatContent.scss';

import { useChat } from '@/app/hooks/useChat';
import { CleanedValue } from '@/shared/const/regex/regex';
import { ExtendedInput } from '@/shared/ui/MessageInput/ui/MessageInput';
import { ExtendedList } from '@/shared/ui/MessageList';

export const ChatContent = () => {
    const { messages, messageInput, setMessageInput, handleSend, visible, hideMessageForm } = useChat();

    const test = (value: string) => {
        const cleanedValue = value.replace(CleanedValue, '').trim();
        setMessageInput(cleanedValue);
    };

    return (
        <div className="custom-chat-wrapper">
            <MainContainer>
                <ChatContainer>
                    <ExtendedList as={MessageList} messages={messages} onSend={handleSend} />
                    <ExtendedInput
                        as={MessageInput}
                        value={messageInput}
                        onChange={(value) => test(value)}
                        handleSend={handleSend}
                        visible={visible}
                        hideMessageForm={hideMessageForm}
                    />
                </ChatContainer>
            </MainContainer>
        </div>
    );
};
