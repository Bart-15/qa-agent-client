import { ChatContainer } from './components/chat-container';
import { useGetChatHistory } from './hooks/useGetChatHistory';

const Chat = () => {
  useGetChatHistory();

  const handleSendMessage = async (message: string) => {};

  return <ChatContainer isLoading={false} onSendMessage={handleSendMessage} />;
};

export default Chat;
