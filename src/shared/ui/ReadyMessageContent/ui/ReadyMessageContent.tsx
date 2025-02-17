import './ReadyMessageContent.scss';

export interface IReadyMessageContent {
    text: string;
    onSendMessage: (message: string) => void;
}

export const ReadyMessageContent = ({ text, onSendMessage }: IReadyMessageContent) => {
    const handleClick = (message: string) => {
        onSendMessage(message);
    };

    return (
        <button className="ready-message-container" onClick={() => handleClick(text)}>
            <p>{text}</p>
        </button>
    );
};
