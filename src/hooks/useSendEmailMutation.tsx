import { sendEmail } from "@/services/EmailService";
import { useMutation } from "@tanstack/react-query";

interface ISendMutationOptions {
  onSuccess?: () => void;
  onError?: () => void;
}

const useSendEmailMutation = ({ onSuccess, onError }: ISendMutationOptions) => {
  return useMutation({
    mutationFn: sendEmail,
    onSuccess,
    onError: () => {
      "Error Occur";
    },
  });
};

export default useSendEmailMutation;
