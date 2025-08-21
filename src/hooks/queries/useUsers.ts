import { useQuery } from "react-query";
import { userApi } from "@/api/user.api";
import { type UserType } from "@/types/user";

export const QUERY_KEYS = {
  USERS: "USERS",
};

export function useUsers() {
  return useQuery<UserType[]>([QUERY_KEYS.USERS], userApi.getUsers)
}
