import { useMutation } from "@tanstack/react-query";
import type { CreateContactDto } from "../types/CreateContactDto";
import { postContactData } from "../../api/postContactData";
import { showNotification } from "../../../../shared/ui/showNotification/showNotification";
import { useUser } from "../../../../entity/user/model/useUser";

export function useContactCreate() {
  const { user, setUser } = useUser();
  const { mutate: createContact } = useMutation({
    mutationFn: (formData: CreateContactDto) => {
      return postContactData(formData);
    },
    onSuccess: ({ message, contactId }) => {
      const newUser = user ? { ...user, contactId } : null;
      setUser(newUser);
      showNotification({
        type: "success",
        title: "Successful request",
        description: message,
      });
    },
  });

  return {
    createContact,
  };
}
