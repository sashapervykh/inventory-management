import { useMutation } from "@tanstack/react-query";
import { postReport } from "../../api/postReport";

export function useUploadReport() {
  const { mutate: uploadReport } = useMutation({
    mutationFn: (strigifiedReport: string) => {
      return postReport(strigifiedReport);
    },
  });

  return {
    uploadReport,
  };
}
