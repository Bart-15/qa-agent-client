import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useEffect } from 'react';

import { keys } from '@/config/constants/queryKeys';
import { getChatHistory } from '@/features/chat/services/chat.service';

import { SessionData } from '../services/chat.service.type';
import { useChatStore } from '../store/useChat.store';

export function useGetChatHistory() {
  const chatStore = useChatStore((state) => state);

  const query = useQuery<SessionData, AxiosError>({
    queryKey: [keys.chaSession],
    queryFn: async () => await getChatHistory(),
    retry: 1,
  });

  const { data: chats, failureReason } = query;

  useEffect(() => {
    if (chats?.chatHistory) {
      // Initialize chat session first if not exists
      if (!chatStore.chat) {
        chatStore.startChat(chats.sessionId);
      }
      chatStore.setChatHistory(chats.chatHistory);
    }
  }, [chats]);

  if (failureReason?.response?.status === 404) {
    //Open a modal session expired then create a new session by inputing your name
  }
}
