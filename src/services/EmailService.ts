import axios, { AxiosResponse } from "axios";
import { IContactFormValues } from "@/lib/validation/ContactFormSchema";

export const sendEmail = async (data: IContactFormValues) => {
  return await axios.post("/api/send-email", data);
};
