import './ButtonSend.scss';

import { SendMessageIcon } from '@/shared/assets/icons/SendMessageIcon';

export interface IButtonSendChat {
    handleSend: () => void;
}

export const ButtonSendChat = ({ handleSend }: IButtonSendChat) => (
    <div className="chat-button-send-container">
        <button onClick={() => handleSend()} className="chat-button-enter">
            <SendMessageIcon />
        </button>
    </div>
);
