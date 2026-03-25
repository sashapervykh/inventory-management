import { useMutation } from "@tanstack/react-query";
import { postReport } from "../../api/postReport";
import { showNotification } from "../../../../shared/ui/showNotification/showNotification";

export function useUploadReport() {
  const { mutate: uploadReport } = useMutation({
    mutationFn: (stringifiedReport: string) => {
      return postReport(stringifiedReport);
    },
    onSuccess: () =>
      showNotification({
        type: "success",
        title: "Report created successfully",
        description:
          "We get your ticket and will solve the issue as soon as possible",
      }),
  });

  return {
    uploadReport,
  };
}
