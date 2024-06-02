import { IContactFormValues } from "@/lib/validation/ContactFormSchema";
import axios, { AxiosResponse } from "axios";

export const sendContactEmail = async (data: IContactFormValues) => {
  const response = await axios.post("/api/send-email", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};
