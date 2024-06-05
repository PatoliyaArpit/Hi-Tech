import * as Yup from "yup";

export const schemaL = Yup.object({
    Email: Yup.string().email().required("Please Enter Your Email..."),
});