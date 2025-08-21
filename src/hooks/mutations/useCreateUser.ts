import { useMutation, useQueryClient } from "react-query";
import { userApi } from "@/api/user.api";
import { QUERY_KEYS } from "@/hooks/queries/useUsers";

export function useCreateUser() {
  const queryClient = useQueryClient();

  return useMutation(
    userApi.createUser,
    {
      onSuccess: () => {
        queryClient.invalidateQueries([QUERY_KEYS.USERS]); // refetch list when a new user is created
      },
    }
  );
}
