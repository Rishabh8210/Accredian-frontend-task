import * as Yup from "yup";

export const referFormSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  course: Yup.string().min(8).required("Please enter couse name"),
  description: Yup.string().required()
});
