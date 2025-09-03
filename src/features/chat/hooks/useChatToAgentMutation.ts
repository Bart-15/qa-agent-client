import { useMutation } from '@tanstack/react-query';

import { askQuestion } from '@/features/chat/services/chat.service';

export function useChatToAgentMutation() {
  const mutation = useMutation({
    mutationFn: async ({ message }: { message: string }) =>
      await askQuestion(message),
  });

  return mutation;
}
