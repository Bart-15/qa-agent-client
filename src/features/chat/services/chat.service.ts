import { axiosInstance } from '@/utils/axios';

import { ChatResponse } from '../types';

// Temporary hard code the values for testing :)
export async function askQuestion(question: string): Promise<ChatResponse> {
  const { data } = await axiosInstance.post<ChatResponse>('/ask', {
    question,
    documentKey: 'matsing-at-kuneho.pdf',
    userId: 'bart-123',
  });
  return data;
}
