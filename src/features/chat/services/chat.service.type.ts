export type ChatMessage = {
  content: string;
  role: 'user' | 'assistant';
  timestamp: number;
};

export type SessionData = {
  sessionId: string;
  userId: string;
  documentKey: string;
  ttl: number;
  lastAccessedAt: number;
  expiryTime: number;
  chatHistory: ChatMessage[];
};
