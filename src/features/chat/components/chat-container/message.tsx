import { ChatMessage } from '../../types';

interface MessageProps {
  message: ChatMessage;
}

export const Message = ({ message }: MessageProps) => {
  const isUser = message.role === 'user';

  return (
    <div className="message-wrapper mb-4 flex">
      <div
        className={`message-bubble max-w-[70%] rounded-lg p-3 ${
          isUser
            ? 'message-user ml-auto bg-blue-100'
            : 'message-assistant bg-gray-100'
        }`}
      >
        <p className="message-content text-sm">{message.content}</p>
        <span className="message-time mt-1 text-xs text-gray-500">
          {new Date(message.timestamp).toLocaleTimeString()}
        </span>
      </div>
    </div>
  );
};
