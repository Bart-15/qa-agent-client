import { axiosInstance } from '@/utils/axios';

import { ChatResponse } from '../types';
import { SessionData } from './chat.service.type';

// Temporary hard coded the values for testing :)
export async function askQuestion(question: string): Promise<ChatResponse> {
  const documentKey = localStorage.getItem('documentKey');
  const sessionId = localStorage.getItem('sessionId');

  const { data } = await axiosInstance.post<ChatResponse>('/ask', {
    question,
    documentKey: 'BartTabusao_CV.pdf',
    sessionId: sessionId ? sessionId : '',
    userId: 'user',
  });

  return data;
}

export async function getChatHistory(): Promise<SessionData> {
  const sessionId = localStorage.getItem('sessionId');

  const { data } = await axiosInstance.get<SessionData>(
    `session?userId=user&sessionId=${sessionId}`,
  );

  return data;
}
