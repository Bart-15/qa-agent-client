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
