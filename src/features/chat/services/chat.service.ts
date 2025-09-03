import { axiosInstance } from '@/utils/axios';

import { ChatResponse } from '../types';

// Temporary hard coded the values for testing :)
export async function askQuestion(question: string): Promise<ChatResponse> {
  const { data } = await axiosInstance.post<ChatResponse>('/ask', {
    question,
    documentKey: 'BartTabusao_CV.pdf',
    userId: 'a95b3101-e083-4723-9f34-0b0ece2cdf0b',
  });
  return data;
}
