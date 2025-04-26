"use client";
import axios from "@/lib/axios";
import { AxiosError } from "axios";
import { Field, Form, Formik, FormikHelpers, FormikProps } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import * as yup from "yup";

interface Props {
  className?: string;
}

const RegisterSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Min 6 character")
    .required("Password is required"),
  referralCode: yup.string(),
});
interface IRegisterForm {
  name: string;
  email: string;
  password: string;
  referralCode?: string;
}

export const RegisterForm: React.FC<Props> = ({ className }) => {
  const router = useRouter();
  const initialValues: IRegisterForm = {
    name: "",
    email: "",
    password: "",
    referralCode: "",
  };

  const onRegister = async (
    value: IRegisterForm,
    action: FormikHelpers<IRegisterForm>
  ) => {
    try {
      const { data } = await axios.post("/auth/register", value);
      toast.success(data.message);

      action.resetForm();
      router.push("/login");
      console.log(data);
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data?.message || "Registration failed");
        console.log(error);
      } else {
        toast.error("An unexpected error occurred");
        console.error(error);
      }
    }
  };

  return (
    <div className={`${className}`}>
     
      <ToastContainer
        theme="colored"
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop
        closeOnClick
        pauseOnHover
      />

       <div className="w-full max-w-md space-y-8">
        <h2 className="text-2xl font-bold text-gray-900">Sign up</h2>

        <Formik
          initialValues={initialValues}
          validationSchema={RegisterSchema}
          onSubmit={onRegister}
        >
          {(props: FormikProps<IRegisterForm>) => {
            const { touched, errors, isSubmitting } = props;
            return (
              <Form className="space-y-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <Field
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-600"
                  />
                  {touched.name && errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <Field
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-600"
                  />
                  {touched.email && errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                {/* Password */}
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <Field
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-600"
                  />
                  {touched.password && errors.password && (
                    <p className="mt-1 text-sm text-red-500">{errors.password}</p>
                  )}
                </div>

                {/* Referral Code */}
                <div>
                  <label htmlFor="referralCode" className="block text-sm font-medium text-gray-700">
                    Referral Code (optional)
                  </label>
                  <Field
                    name="referralCode"
                    type="text"
                    placeholder="Enter referral code"
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-600"
                  />
                  {touched.referralCode && errors.referralCode && (
                    <p className="mt-1 text-sm text-red-500">{errors.referralCode}</p>
                  )}
                </div>

                {/* Sign up button */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`
                      w-full flex justify-center py-3 rounded-lg font-semibold transition
                      ${
                        isSubmitting
                          ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                          : "bg-pink-600 text-white hover:bg-pink-700"
                      }
                    `}
                  >
                    {isSubmitting ? "Loading..." : "Sign up"}
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>

        <p className="text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link href="/login" className="text-pink-600 font-medium hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};
