import { ButtonSendAudio } from '@/shared/ui/ButtonSendAudio';
import { ButtonSendChat } from '@/shared/ui/ButtonSendChat';

interface ISendButtonGroup {
    isMobile: boolean;
    isButtonVisible: boolean;
    handleSend: () => void;
}

export const SendButtonGroup = ({ isMobile, isButtonVisible, handleSend }: ISendButtonGroup) => {
    if (isMobile) {
        return isButtonVisible ? <ButtonSendChat handleSend={handleSend} /> : <ButtonSendAudio />;
    }

    return (
        <>
            <ButtonSendChat handleSend={handleSend} />
            <ButtonSendAudio />
        </>
    );
};
