import { MutationCache, QueryCache, QueryClient } from "@tanstack/react-query";
import { showNotification } from "../../ui/showNotification/showNotification";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: false, staleTime: 0 },
    mutations: { retry: false },
  },
  queryCache: new QueryCache({
    onError: (error) => {
      const message =
        error instanceof Error
          ? error.message
          : "Unexpected error happened during request";
      showNotification({
        type: "error",
        title: "Request failed",
        description: message,
      });
    },
  }),
  mutationCache: new MutationCache({
    onError: (error) => {
      const message =
        error instanceof Error
          ? error.message
          : "Unexpected error happened during request";
      showNotification({
        type: "error",
        title: "Request failed",
        description: message,
      });
    },
  }),
});
