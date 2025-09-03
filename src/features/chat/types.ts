export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
}

export interface ChatProps {
  chatHistory: ChatMessage[];
  isLoading?: boolean;
  onSendMessage: (message: string) => void;
}

export type ChatEntry = {
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
};

export type ChatResponse = {
  answer: string;
  sessionId: string;
  chatHistory: ChatEntry[];
};
