import type { MessageProps } from '@chatscope/chat-ui-kit-react';
import { Message } from '@chatscope/chat-ui-kit-react';

import { AppIcon } from '@/shared/assets/icons/AppIcon';

import { useMediaQuery } from '@/app/hooks/useMediaQuery';
import { isFileMessage } from '@/app/utils/isFileMessage';
import { removeWebmFromText } from '@/app/utils/removeWebmFromText';
import { truncateContent } from '@/app/utils/truncateContentMessage';
import type { IChat } from '@/feature/chat/model/ChatSlice';
import { AudioPlayerButton } from '@/shared/ui/AudioPlayerButton/ui/AudioPlayerButton';
import { FileButton } from '@/shared/ui/FileButton';
import { isCurrentUser, readSymbolSvg } from '@/shared/ui/MessageList/ui/MessageList';

interface IExtendedMessageProps extends MessageProps {
    as?: string | typeof Message;
    msg: IChat;
    showSender: boolean;
}

export const ExtendedMessage = ({ msg, showSender }: IExtendedMessageProps) => {
    const isLargeScreen = useMediaQuery('(min-width: 1024px)');
    const isMediumScreen = useMediaQuery('(min-width: 425px) and (max-width: 480px)');
    const isAudioMessage = msg.content.endsWith('.mp3');

    const breakpoints = {
        large: 40,
        medium: 30,
        small: 10,
    };

    const screenConditions = [
        { condition: isMediumScreen, value: breakpoints.medium },
        { condition: isLargeScreen, value: breakpoints.large },
        { condition: true, value: breakpoints.small },
    ];

    const characterLimit = screenConditions.find((screen) => screen.condition)?.value ?? breakpoints.small;

    const fileMessage = isFileMessage(msg.content);
    const messageContent = removeWebmFromText(fileMessage ? truncateContent(msg.content, characterLimit) : msg.content);

    return (
        <section className="cs-message cs-message--outgoing cs-message--single">
            {fileMessage && <FileButton msg={msg.content} />}
            {isAudioMessage && <AudioPlayerButton fileName={msg.content} />}
            <Message
                key={msg.id}
                model={{
                    message: `${messageContent} <span class="message-time">${msg.timestamp}</span>${isCurrentUser(msg.sender) ? readSymbolSvg : ''}`,
                    sentTime: msg.timestamp,
                    sender: msg.sender,
                    direction: msg.direction,
                    position: 'single',
                }}>
                {showSender && !isCurrentUser(msg.sender) && (
                    <Message.Header>
                        {msg.sender}
                        <AppIcon />
                    </Message.Header>
                )}
            </Message>
        </section>
    );
};
