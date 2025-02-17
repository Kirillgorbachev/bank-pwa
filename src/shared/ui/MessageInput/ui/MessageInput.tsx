import type { MessageInputProps } from '@chatscope/chat-ui-kit-react';
import { MessageInput } from '@chatscope/chat-ui-kit-react';

import { useMediaQuery } from '@/app/hooks/useMediaQuery';
import { ButtonAddFile } from '@/shared/ui/ButtonAddFile';
import { ReadyMessageForm } from '@/shared/ui/ReadyMessageForm';
import { SendButtonGroup } from '@/shared/ui/SendButtonGroup/ui/SendButtonGroup';

interface IExtendedInputProps extends MessageInputProps {
    as?: string | typeof MessageInput;
    visible: boolean;
    handleSend: () => void;
    hideMessageForm: () => void;
}

export const ExtendedInput = ({ value, onChange, handleSend, visible, hideMessageForm }: IExtendedInputProps) => {
    const isMobile = useMediaQuery('(max-width: 480px)');
    const isButtonVisible = (value!.trim().length as number) !== 0;

    return (
        <>
            {visible && <ReadyMessageForm handleSend={handleSend} />}
            <div className="chat-bottom-non-fixed-container">
                <div className="chat-bottom-container">
                    <MessageInput
                        placeholder="Напишите свой вопрос"
                        value={value}
                        onChange={onChange}
                        onSend={handleSend}
                        onFocus={() => {
                            hideMessageForm();
                        }}
                        attachButton={false}
                        sendButton={false}
                        className="chat-message-input"
                    />

                    <ButtonAddFile />
                    <SendButtonGroup isMobile={isMobile} isButtonVisible={isButtonVisible} handleSend={handleSend} />
                </div>
            </div>
        </>
    );
};
