import { useState } from 'react';

import { ChatContainer } from './components/chat-container';
import { ChatMessage } from './types';

const Chat = () => {
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      content: 'Hello! How can I help you today?',
      timestamp: Date.now(),
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (message: string) => {
    // Add user message
    const userMessage: ChatMessage = {
      role: 'user',
      content: message,
      timestamp: Date.now(),
    };
    setChatHistory((prev) => [...prev, userMessage]);

    // Simulate AI response
    setIsLoading(true);
    setTimeout(() => {
      const assistantMessage: ChatMessage = {
        role: 'assistant',
        content: 'This is a simulated response to: ' + message,
        timestamp: Date.now(),
      };
      setChatHistory((prev) => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <ChatContainer
      chatHistory={chatHistory}
      isLoading={isLoading}
      onSendMessage={handleSendMessage}
    />
  );
};

export default Chat;
