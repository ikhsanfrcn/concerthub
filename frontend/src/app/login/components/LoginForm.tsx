"use client";
import axios from "@/lib/axios";
import { AxiosError } from "axios";
import { Field, Form, Formik, FormikHelpers, FormikProps } from "formik";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { toast } from "react-toastify";
import * as yup from "yup";

interface Props {
  className?: string;
}

const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Min 6 character")
    .required("Password is required"),
});
interface ILoginForm {
  email: string;
  password: string;
}

export const LoginForm: React.FC<Props> = ({ className }) => {
  const initialValues: ILoginForm = {
    email: "",
    password: "",
  };

  const onLogin = async (
    value: ILoginForm,
    action: FormikHelpers<ILoginForm>
  ) => {
    try {
      const { data } = await axios.post("/auth/login", value);
      const user = data.data;
      action.resetForm();
      await signIn("credentials", {
        redirectTo: "/",
        id: user.id,
        name: user.name,
        lastName: user.lastName,
        email: user.email,
        zipCode: user.zipCode,
        state: user.state,
        city: user.city,
        street: user.street,
        houseNumber: user.houseNumber,
        dob: user.dob,
        role: user.role,
        accessToken: data.access_token,
      });
      console.log(data);
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data?.message);
        console.log(error);
      }
    }
  };

  return (
    <div className={`${className}`}>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Sign up to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <Formik
            initialValues={initialValues}
            validationSchema={LoginSchema}
            onSubmit={onLogin}
          >
            {(props: FormikProps<ILoginForm>) => {
              const { touched, errors, isSubmitting } = props;
              return (
                <Form className="space-y-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <Field
                        name="email"
                        type="email"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      />
                      {touched.email && errors.email ? (
                        <div className="text-red-500">{errors.email}</div>
                      ) : null}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="password"
                        className="block text-sm/6 font-medium text-gray-900"
                      >
                        Password
                      </label>
                      <div className="text-sm">
                        <Link
                          href="#"
                          className="font-semibold text-indigo-600 hover:text-indigo-500"
                        >
                          Forgot password?
                        </Link>
                      </div>
                    </div>
                    <div className="mt-2">
                      <Field
                        name="password"
                        type="password"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      />
                      {touched.password && errors.password ? (
                        <div className="text-red-500">{errors.password}</div>
                      ) : null}
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-primary-500 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:cursor-pointer"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Loading ..." : "Sign in"}
                    </button>
                  </div>
                </Form>
              );
            }}
          </Formik>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Do not have an account?{" "}
            <Link
              href="/register"
              className="font-semibold text-primary-500 hover:text-indigo-500"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
