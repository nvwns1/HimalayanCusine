import * as Yup from "yup";

export interface IReservationState {
  fullname: string;
  email: string;
  phoneNumber: number | null;
  numberOfGuests: number | null;
  reservationDate: string;
  specialRequest: string;
}

export const reservationFormSchema = Yup.object().shape({
  fullname: Yup.string().required("required"),
  email: Yup.string().email("Invalid email").required("required"),
  phoneNumber: Yup.number().required("required"),
  numberOfGuests: Yup.number()
    .required("required")
    .min(1, "Number cannot be negative"),
  reservationDate: Yup.string()
    .required("required")
    .test("is-future-datetime", "cannot be in the past", function (value) {
      if (!value) return true; // If no value, validation will fail on required check

      const reservationDateTime = new Date(value);
      const now = new Date();

      return reservationDateTime >= now;
    }),
  specialRequest: Yup.string(),
});
