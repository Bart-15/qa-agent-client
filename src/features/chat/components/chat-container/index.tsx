import { useState } from 'react';

import { useChatToAgentMutation } from '../../hooks/useChatToAgentMutation';
import { useChatStore } from '../../store/useChat.store';
import { ChatProps } from '../../types';
import NavBar from '../nav-bar';
import { ChatInput } from './chat-input';
import { MessageList } from './message-list';

export const ChatContainer = ({ isLoading }: ChatProps) => {
  const chatStore = useChatStore((state) => state);
  const [activeTab, setActiveTab] = useState<'chat' | 'upload-document'>(
    'chat',
  );

  const chatMutation = useChatToAgentMutation();

  async function onSendMessage(message: string) {
    if (!chatStore.chat) {
      chatStore.startChat('a95b3101-e083-4723-9f34-0b0ece2cdf0b');
    }

    // Add new chat
    chatStore.addMessage({
      role: 'user',
      content: message,
      timestamp: Date.now(),
    });

    const response = await chatMutation.mutateAsync({ message });

    chatStore.setAnswer(response.answer, {
      role: 'assistant',
      content: response.answer,
      timestamp: Date.now(),
    });

    //Set session id to local storage and documentKey
    const sessionId = localStorage.getItem('sessionId');

    if (!sessionId) {
      localStorage.setItem('sessionId', response.sessionId);
    }

    localStorage.setItem('documentKey', 'BartTabusao_CV.pdf');
  }

  return (
    <div className="flex h-screen flex-col bg-white">
      <NavBar activeTab={activeTab} onTabChange={setActiveTab} />
      <MessageList
        messages={chatStore.chat?.chatHistory || []}
        isLoading={chatMutation.isPending}
      />
      <ChatInput onSendMessage={onSendMessage} />
    </div>
  );
};
