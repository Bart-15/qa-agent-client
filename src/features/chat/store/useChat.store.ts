import { create } from 'zustand';

import { ChatEntry, ChatResponse } from '../types';

type ChatStore = {
  chat: ChatResponse | null;
  startChat: (sessionId: string) => void;
  addMessage: (entry: ChatEntry) => void;
  setAnswer: (answer: string, entry: ChatEntry) => void;
  clearChat: () => void;
};

export const useChatStore = create<ChatStore>((set) => ({
  chat: null,

  // Start fresh session
  startChat: (sessionId) =>
    set({
      chat: {
        answer: '',
        sessionId,
        chatHistory: [],
      },
    }),

  // Add user/assistant message optimistically
  addMessage: (entry) =>
    set((state) =>
      state.chat
        ? {
            chat: {
              ...state.chat,
              chatHistory: [...state.chat.chatHistory, entry],
            },
          }
        : state,
    ),

  // Update assistant answer when API responds
  setAnswer: (answer, entry) =>
    set((state) =>
      state.chat
        ? {
            chat: {
              ...state.chat,
              answer,
              chatHistory: [...state.chat.chatHistory, entry],
            },
          }
        : state,
    ),

  clearChat: () => set({ chat: null }),
}));
