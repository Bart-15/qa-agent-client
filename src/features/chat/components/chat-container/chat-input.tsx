import { Send } from 'lucide-react';
import { useState } from 'react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

export const ChatInput = ({ onSendMessage }: ChatInputProps) => {
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (message.trim()) {
      onSendMessage(message.trim());
      setMessage('');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="chat-input-form sticky bottom-0 border-t bg-white p-4"
    >
      <div className="chat-input-wrapper flex gap-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="chat-input flex-1 rounded-lg border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
          placeholder="Type your message..."
        />
        <button
          type="submit"
          disabled={!message.trim()}
          className="chat-send-button rounded-lg bg-blue-500 p-2 text-white transition-colors hover:bg-blue-600 disabled:opacity-50"
        >
          <Send />
        </button>
      </div>
    </form>
  );
};
