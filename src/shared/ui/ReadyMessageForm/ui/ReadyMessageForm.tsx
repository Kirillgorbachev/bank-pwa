import { Fragment } from 'react';

import './ReadyMessageForm.scss';

import type { IButtonSendChat } from '@/shared/ui/ButtonSendChat/ui/ButtonSendChat';
import { ReadyMessageContent } from '@/shared/ui/ReadyMessageContent';

interface IReadyMessage {
    id: number;
    name: string;
}

const ReadyMessage: IReadyMessage[] = [
    { id: 1, name: 'Зарегистрировать ИП' },
    { id: 2, name: 'Переводы' },
    { id: 3, name: 'Кэшбек' },
    { id: 4, name: 'Обмен' },
    { id: 5, name: 'Лимиты' },
    { id: 6, name: 'Оформление продуктов банка' },
];

export const ReadyMessageForm = ({ handleSend }: IButtonSendChat) => (
    <div className="message-form-container">
        {ReadyMessage.map((item) => (
            <Fragment key={item.id}>
                <ReadyMessageContent text={item.name} onSendMessage={handleSend} />
            </Fragment>
        ))}
    </div>
);
