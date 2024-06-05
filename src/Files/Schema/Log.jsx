import * as Yup from "yup";

export const schema1 = Yup.object({
    Email: Yup.string().email().required("Please Enter Your Email..."),
    Password: Yup.string().min(3).required("Enter Password..."),
});