import { useState } from 'react';

import { ChatProps } from '../../types';
import NavBar from '../nav-bar';
import { ChatInput } from './chat-input';
import { MessageList } from './message-list';

export const ChatContainer = ({
  chatHistory,
  isLoading,
  onSendMessage,
}: ChatProps) => {
  const [activeTab, setActiveTab] = useState<'chat' | 'upload-document'>(
    'chat',
  );

  return (
    <div className="flex h-screen flex-col bg-white">
      <NavBar activeTab={activeTab} onTabChange={setActiveTab} />
      <MessageList messages={chatHistory} isLoading={isLoading} />
      <ChatInput onSendMessage={onSendMessage} />
    </div>
  );
};
