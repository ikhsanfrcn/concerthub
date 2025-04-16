"use client";
import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useFormik } from "formik";
import * as Yup from "yup";

interface ProfileFormProps {
  isVisible: boolean;
}

export const ProfileForm: React.FC<ProfileFormProps> = ({ isVisible }) => {
  const { data: session, status } = useSession();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      zipCode: "",
      state: "",
      city: "",
      street: "",
      houseNumber: "",
      dob: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      lastName: Yup.string(),
      email: Yup.string().email("Invalid email format").required("Required"),
      zipCode: Yup.string().required("Required"),
      state: Yup.string().required("Required"),
      city: Yup.string().required("Required"),
      street: Yup.string().required("Required"),
      houseNumber: Yup.string().required("Required"),
      dob: Yup.string().required("Required"),
    }),
    onSubmit: async (values) => {
      console.log("add to backend:", values);
      // bisa dihubungkan ke backend untuk update profile user
    },
    enableReinitialize: true,
  });

  // Populate form dari session user
  useEffect(() => {
    if (session?.user) {
      const firstName = session.user.name;
      const lastName = session.user.lastName;
      const email = session.user.email;
      const zipCode = session.user.zipCode;
      const state = session.user.state;
      const city = session.user.city;
      const street = session.user.street;
      const houseNumber = session.user.houseNumber;
      const dob = session.user.dob;

      formik.setValues({
        firstName: firstName || "",
        lastName: lastName || "",
        email: email || "",
        zipCode: zipCode || "",
        state: state || "",
        city: city || "",
        street: street || "",
        houseNumber: houseNumber || "",
        dob: dob || "",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  if (!isVisible) return null;
  if (status === "loading") return <p className="mt-4">Loading user data...</p>;

  return (
    <form onSubmit={formik.handleSubmit} className="mt-4 space-y-4">
      <InputField
        label="First name"
        name="firstName"
        value={formik.values.firstName}
        error={formik.touched.firstName && formik.errors.firstName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <InputField
        label="Last name"
        name="lastName"
        value={formik.values.lastName}
        error={formik.touched.lastName && formik.errors.lastName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <InputField
        label="Email"
        name="email"
        value={formik.values.email}
        error={formik.touched.email && formik.errors.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <InputField
        label="Zip code"
        name="zipCode"
        value={formik.values.zipCode}
        error={formik.touched.zipCode && formik.errors.zipCode}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <InputField
        label="State"
        name="state"
        value={formik.values.state}
        error={formik.touched.state && formik.errors.state}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <InputField
        label="City"
        name="city"
        value={formik.values.city}
        error={formik.touched.city && formik.errors.city}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <InputField
        label="Street"
        name="street"
        value={formik.values.street}
        error={formik.touched.street && formik.errors.street}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <InputField
        label="House number"
        name="houseNumber"
        value={formik.values.houseNumber}
        error={formik.touched.houseNumber && formik.errors.houseNumber}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <InputField
        label="Date of birth"
        name="dob"
        value={formik.values.dob}
        error={formik.touched.dob && formik.errors.dob}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />

      <div className="flex justify-end mb-[32px]">
        <button
          type="submit"
          className="bg-primary-500 text-white px-4 py-2 rounded-2xl"
          disabled={formik.isSubmitting}
        >
          {formik.isSubmitting ? "Loading..." : "Save Changes"}
        </button>
      </div>
    </form>
  );
};

interface InputFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string | false;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  value,
  onChange,
  onBlur,
  error,
}) => (
  <div>
    <label className="text-sm mb-1 block">{label}</label>
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      className={`w-full p-2 border rounded ${
        error ? "border-red-500" : "border-gray-300"
      }`}
    />
    {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
  </div>
);
