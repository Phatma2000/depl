import * as yup from "yup";

 const validationSchema = yup.object({
   firstName: yup.string().required("First name is required"),
   middleName: yup.string(),
   lastName: yup.string().required("Last name is required"),
   title: yup.string().required("Title is required"),
   email: yup.string().email("Enter your email").required("Email is required"),
   companyName: yup.string().required("CompanyName is required"),
   slogan: yup.string(),
   description: yup.string(),
   address: yup.string().required(" Address is required"),
   phoneNumber: yup.string().required("PhoneNumber is required"),
   website: yup.string(),
 });
  // const validationSchema = yup.object({
  //   firstName: yup.string(),
  //   middleName: yup.string(),
  //   lastName: yup.string(),
  //   title: yup.string(),
  //   email: yup.string(),
  //   companyName: yup.string(),
  //   slogan: yup.string(),
  //   description: yup.string(),
  //   address: yup.string(),
  //   phoneNumber: yup.string(),
  //   website: yup.string(),
  // });

export default validationSchema;
