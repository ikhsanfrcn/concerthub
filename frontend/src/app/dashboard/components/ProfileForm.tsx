"use client";
import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "@/lib/axios";

interface ProfileFormProps {
  isVisible: boolean;
}

export const ProfileForm: React.FC<ProfileFormProps> = ({ isVisible }) => {
  const { data: session, status } = useSession();

  const formik = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      email: "",
      zipCode: "",
      state: "",
      city: "",
      street: "",
      houseNumber: "",
      dob: "",
      phoneNumber: ""
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      lastName: Yup.string(),
      email: Yup.string().email("Invalid email format").required("Required"),
      zipCode: Yup.string().required("Required"),
      state: Yup.string().required("Required"),
      city: Yup.string().required("Required"),
      street: Yup.string().required("Required"),
      houseNumber: Yup.string().required("Required"),
      dob: Yup.string().required("Required"),
      phoneNumber: Yup.string()
      .matches(/^\d+$/, "Phone number must contain only numbers") // Pastikan hanya angka
      .required("Phone number is required"),
    }),
    onSubmit: async (values) => {
      console.log("add to backend:", values);
      const token = session?.accessToken;
       try {
        const response = await axios.patch("/auth/profile-update", values, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        })

        if (response.status === 200) {
          alert("Profile update successfully!")
        } else {
          alert("Failed to update profile")
        }
       } catch (error) {
        console.log(error);
       }
    },
    enableReinitialize: true,
  });

  // Populate form dari session user
  useEffect(() => {
    if (session?.user) {
      const name = session.user.name;
      const lastName = session.user.lastName;
      const email = session.user.email;
      const zipCode = session.user.zipCode;
      const state = session.user.state;
      const city = session.user.city;
      const street = session.user.street;
      const houseNumber = session.user.houseNumber;
      const dob = session.user.dob;
      const phoneNumber = session.user.phoneNumber;

      formik.setValues({
        name: name || "",
        lastName: lastName || "",
        email: email || "",
        zipCode: zipCode || "",
        state: state || "",
        city: city || "",
        street: street || "",
        houseNumber: houseNumber || "",
        dob: dob || "",
        phoneNumber: phoneNumber || "",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  if (!isVisible) return null;
  if (status === "loading") return <p className="mt-4">Loading user data...</p>;

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="min-[768px]:flex flex-wrap min-[768px]:space-x-[24px] mt-4 space-y-4"
    >
      <div className="min-[768px]:w-[calc(50%-24px)]">
        <InputField
          label="First name"
          name="name"
          value={formik.values.name}
          error={formik.touched.name && formik.errors.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </div>
      <div className="min-[768px]:w-[calc(50%-24px)]">
        <InputField
          label="Last name"
          name="lastName"
          value={formik.values.lastName}
          error={formik.touched.lastName && formik.errors.lastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </div>
      <div className="min-[768px]:w-[calc(50%-24px)]">
        <InputField
          label="Email"
          name="email"
          value={formik.values.email}
          error={formik.touched.email && formik.errors.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </div>
      <div className="min-[768px]:w-[calc(50%-24px)]">
        <InputField
          label="Zip code"
          name="zipCode"
          value={formik.values.zipCode}
          error={formik.touched.zipCode && formik.errors.zipCode}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </div>
      <div className="min-[768px]:w-[calc(50%-24px)]">
        <InputField
          label="State"
          name="state"
          value={formik.values.state}
          error={formik.touched.state && formik.errors.state}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </div>
      <div className="min-[768px]:w-[calc(50%-24px)]">
        <InputField
          label="City"
          name="city"
          value={formik.values.city}
          error={formik.touched.city && formik.errors.city}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </div>
      <div className="min-[768px]:w-[calc(50%-24px)]">
        <InputField
          label="Street"
          name="street"
          value={formik.values.street}
          error={formik.touched.street && formik.errors.street}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </div>
      <div className="min-[768px]:w-[calc(50%-24px)]">
        <InputField
          label="House number"
          name="houseNumber"
          value={formik.values.houseNumber}
          error={formik.touched.houseNumber && formik.errors.houseNumber}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </div>
      <div className="min-[768px]:w-[calc(50%-24px)]">
        <InputField
          label="Phone Number"
          name="phoneNumber"
          value={formik.values.phoneNumber}
          error={formik.touched.phoneNumber && formik.errors.phoneNumber}
          onChange={(e) => {
            const cleanedValue = e.target.value.replace(/[^0-9]/g, '');
            formik.setFieldValue('phoneNumber', cleanedValue);
          }}
          onBlur={formik.handleBlur}
        />
      </div>
      <div className="min-[768px]:w-[calc(50%-24px)]">
        <InputField
          label="Date of birth"
          name="dob"
          value={formik.values.dob}
          error={formik.touched.dob && formik.errors.dob}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </div>

      <div className="min-[768px]:w-full flex justify-end items-center mb-[32px] min-[768px]:mb-0">
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
