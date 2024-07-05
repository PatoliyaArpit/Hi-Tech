import * as Yup from "yup";

export const Address = Yup.object({
    FName: Yup.string().min(4).max(30).required("Please Enter Your Full Name..."),
    LName:Yup.string().min(4).max(30).required("Please Enter Your Full Name..."),
    Contact: Yup.string().min(6).required("Please Enter Your Number..."),
    Addressd:Yup.string().min(2).required("Please Enter Your Address..."),
    City:Yup.string().min(2).required("Please Enter Your City..."),
    State:Yup.string().min(2).required("Please Enter Your State ..."),
    Pincode:Yup.string().min(6).required("Please Enter Your Pincode..."),
});
