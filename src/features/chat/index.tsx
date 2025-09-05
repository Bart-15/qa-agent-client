import { useEffect } from 'react';

import { ChatContainer } from './components/chat-container';
import { useGetChatHistory } from './hooks/useGetChatHistory';
import { useChatStore } from './store/useChat.store';

const Chat = () => {
  const chatStore = useChatStore((state) => state);
  const { data: chats } = useGetChatHistory();

  useEffect(() => {
    if (chats?.chatHistory) {
      // Initialize chat session first if not exists
      if (!chatStore.chat) {
        chatStore.startChat(chats.sessionId);
      }
      chatStore.setChatHistory(chats.chatHistory);
    }
  }, [chats]);

  const handleSendMessage = async (message: string) => {};

  console.log(chatStore.chat?.chatHistory);
  return <ChatContainer isLoading={false} onSendMessage={handleSendMessage} />;
};

export default Chat;
