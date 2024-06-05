import * as Yup from "yup";

export const signup = Yup.object({
    Name: Yup.string().min(4).max(25).required("Please Enter Your Full Name..."),
    Email: Yup.string().email().required("Please Enter Your Email..."),
    Contact: Yup.string().min(6).required("Please Enter Your Number..."),
    Messag: Yup.string().min(10).required("Enter Any Ask..."),
});
