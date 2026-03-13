import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { UserRegistrationDto } from "../types/UserRegistrationDto";
import { sendRegistrationRequest } from "../../api/sendRegistrationRequest";
import { useUser } from "../../../../entity/user/model/useUser";
import type { UserLoginDto } from "../types/UserLoginDto";
import { sendLoginRequest } from "../../api/sendLoginRequest";

export function useUserData() {
  const queryClient = useQueryClient();
  const { setUser } = useUser();
  const queryKey = ["user"];

  const {
    mutateAsync: registerUser,
    isPending: isRegistering,
    isSuccess,
  } = useMutation({
    mutationFn: async (userRegistrationDto: UserRegistrationDto) => {
      const user = await sendRegistrationRequest(userRegistrationDto);
      setUser(user);
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey }),
  });

  const {
    mutateAsync: loginUser,
    isPending: isLogining,
    isSuccess: success,
  } = useMutation({
    mutationFn: async (userLoginDto: UserLoginDto) => {
      const user = await sendLoginRequest(userLoginDto);
      setUser(user);
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey }),
  });

  return {
    isRegistering,
    registerUser,
    isSuccess,
    loginUser,
    isLogining,
    success,
  };
}
