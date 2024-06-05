import * as Yup from "yup";

export const schemaPass = Yup.object({
    Otp: Yup.string().max(6).required("Enter Otp..."),
    Password: Yup.string().min(3).required("Enter Password..."),
});