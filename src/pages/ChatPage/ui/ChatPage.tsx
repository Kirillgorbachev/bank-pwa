import { AppIcon } from '@/shared/assets/icons/AppIcon';

import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import './ChatPage.scss';

import { ChatContent } from '@/feature/chat/ui/ChatContent';

const ChatPage = () => (
    <div className="chat-container">
        <div className="chat-header">
            <div className="chat-header-icon">
                <AppIcon />
            </div>
            <h3>Чат поддержки</h3>
            <div className="support-status">
                <div className="status-indicator"></div>
                <span>Онлайн</span>
            </div>
        </div>
        <ChatContent />
    </div>
);

export default ChatPage;
