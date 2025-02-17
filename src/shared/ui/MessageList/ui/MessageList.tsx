import reactDOMServer from 'react-dom/server';
import type { MessageListProps } from '@chatscope/chat-ui-kit-react';
import { Message, MessageList, MessageSeparator } from '@chatscope/chat-ui-kit-react';

import { formatDateForDisplay } from '@/app/utils/getCurrentDate';
import type { IChat } from '@/feature/chat/model/ChatSlice';
import { ReadSymbol } from '@/shared/assets/icons/ReadSymbol';
import { ExtendedMessage } from '@/shared/ui/Message/ui/Message';

interface IExtendedListProps extends MessageListProps {
    as?: string | typeof MessageList;
    messages: IChat[];
    onSend: (messageText?: string) => void;
}

export const readSymbolSvg = reactDOMServer.renderToString(<ReadSymbol />);
export const isCurrentUser = (sender: string): boolean => sender === 'Me';

export const ExtendedList = ({ messages }: IExtendedListProps) => (
    <MessageList>
        {messages.reduce((acc: any[], msg, index, arr) => {
            const prevMsg = arr[index - 1];
            const isNewDate = !prevMsg || prevMsg.date !== msg.date;
            const showSender = !prevMsg || prevMsg.sender !== msg.sender || prevMsg.direction !== msg.direction;

            if (isNewDate) {
                acc.push(
                    <MessageSeparator key={`date-${msg.date}`}>{formatDateForDisplay(msg.date)}</MessageSeparator>,
                );
            }

            acc.push(<ExtendedMessage key={msg.id} as={Message} msg={msg} showSender={showSender} />);

            return acc;
        }, [])}
    </MessageList>
);
