import { useEffect, useRef } from 'react';

import { ChatMessage } from '../../types';
import { Message } from './message';
import { SkeletonLoader } from './skeleton-loader';

interface MessageListProps {
  messages: ChatMessage[];
  isLoading?: boolean;
}

export const MessageList = ({ messages, isLoading }: MessageListProps) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  return (
    <div className="flex-1 overflow-y-auto p-4">
      {messages.map((message, index) => (
        <Message key={message.timestamp + index} message={message} />
      ))}
      {isLoading && <SkeletonLoader />}
      <div ref={messagesEndRef} />
    </div>
  );
};
