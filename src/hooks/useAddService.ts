import { updateServices } from "@/api/admin/service/service.api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useUpdateService = (id: string) => {
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation({
    mutationFn: updateServices,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["services", id] });
    },
  });
  return mutateAsync;
};
