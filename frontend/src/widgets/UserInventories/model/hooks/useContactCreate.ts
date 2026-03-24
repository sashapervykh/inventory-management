import { useMutation } from "@tanstack/react-query";
import type { CreateContactDto } from "../types/CreateContactDto";
import { postContactData } from "../../api/postContactData";
import { showNotification } from "../../../../shared/ui/showNotification/showNotification";

export function useContactCreate() {
  const { mutate: createContact } = useMutation({
    mutationFn: (formData: CreateContactDto) => {
      return postContactData(formData);
    },
    onSuccess: ({ message }) =>
      showNotification({
        type: "success",
        title: "Successful request",
        description: message,
      }),
  });

  return {
    createContact,
  };
}
