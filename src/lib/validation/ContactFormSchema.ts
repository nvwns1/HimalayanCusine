import * as Yup from "yup";

export interface IContactFormValues {
  name: string;
  email: string;
  message: string;
}

export const contactFormSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  message: Yup.string().required("Message is required"),
});
