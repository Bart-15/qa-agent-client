import { useQuery } from '@tanstack/react-query';

import { keys } from '@/config/constants/queryKeys';
import { getChatHistory } from '@/features/chat/services/chat.service';

export function useGetChatHistory() {
  const query = useQuery({
    queryKey: [keys.chaSession],
    queryFn: async () => await getChatHistory(),
  });

  return query;
}
