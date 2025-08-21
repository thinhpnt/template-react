import axiosClient from "./axiosClient";
import type { UserType } from "@/types/user";

export const userApi = {
  getUsers: (): Promise<UserType[]> => axiosClient.get("/users"),
  createUser: (payload: Partial<UserType>): Promise<UserType> =>
    axiosClient.post("/users", payload),
};
