import ProfileHeader from "./ProfileHeader";
import { useFormik } from "formik";
import InputField from "@/shared/components/InputField";
import SelectField from "@/shared/components/SelectField";
import * as Yup from "yup";
import { CountryDropdown } from "react-country-region-selector";
import { useState } from "react";

export default function ProfileBox() {
  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(e.target.value);
    formik.setFieldValue("serviceType", selectedValue);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      userName: "thejubal.com/",
      city: "",
      country: "",
      skillOrTalent: "",
      rate: "",
      experienceLevel: "",
      bio: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="bg-white p-[3rem] rounded-[2rem]">
      <ProfileHeader />
      <form
        onSubmit={formik.handleSubmit}
        className="mt-[3rem] flex justify-between flex-wrap"
      >
        <InputField
          label="Name"
          name="name"
          type="text"
          placeholder="Please Enter Your Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          error={
            formik.touched.name && formik.errors.name
              ? formik.errors.name
              : null
          }
        />

        <InputField
          label="Username(Profile Link)"
          type="text"
          name="userName"
          placeholder="thejubal.com/"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.userName}
          error={
            formik.touched.userName && formik.errors.userName
              ? formik.errors.userName
              : null
          }
        />

        <div className="mb-[2rem] w-[46%] ">
          <label
            className="text-[1.6rem] font-[600] text-jubalGrey"
            htmlFor="country"
          >
            City
          </label>
          <CountryDropdown
            name="city"
            id="city"
            value={formik.values.city}
            onChange={(_, e) => formik.handleChange(e)}
            onBlur={formik.handleBlur}
          />

          {formik.touched.city && formik.errors.city ? (
            <div className="text-[1.3rem] text-red-700">
              {formik.errors.city}
            </div>
          ) : null}
        </div>

        <div className="mb-[2rem] w-[46%] ">
          <label
            className="text-[1.6rem] font-[600] text-jubalGrey"
            htmlFor="country"
          >
            Country
          </label>
          <CountryDropdown
            name="country"
            id="country"
            value={formik.values.country}
            onChange={(_, e) => formik.handleChange(e)}
            onBlur={formik.handleBlur}
          />

          {formik.touched.country && formik.errors.country ? (
            <div className="text-[1.3rem] text-red-700">
              {formik.errors.country}
            </div>
          ) : null}
        </div>

        <SelectField
          label="Select Your Skill or Talent"
          name="SkillOrTalent"
          options={[
            { value: "", label: "--Select Your Skill--" },
            { value: "Sound Engineer", label: "Sound Engineeer" },
            {
              value: "Music Producer",
              label: "Music Producter",
            },
            {
              value: "Pianist",
              label: "Pianist",
            },
          ]}
          value={selectedValue}
          onChange={handleSelectChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.skillOrTalent && formik.errors.skillOrTalent
              ? formik.errors.skillOrTalent
              : null
          }
        />

        <div className="mb-[2rem] w-[46%] flex items-center">
          <p className="text-[1.6rem] text-left">Add More Skills</p>
        </div>

        <InputField
          name="rate"
          type="text"
          label="Rate"
          placeholder=""
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.rate}
          error={
            formik.touched.rate && formik.errors.rate
              ? formik.errors.rate
              : null
          }
        />

        <SelectField
          label="Experience Level"
          name="experienceLevel"
          options={[
            { value: "0-1 year", label: "0-1 year" },
            {
              value: "2-5 years",
              label: "2-5 years ",
            },
            {
              value: "5-7 years",
              label: "5-7 years ",
            },
          ]}
          value={selectedValue}
          onChange={handleSelectChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.experienceLevel && formik.errors.experienceLevel
              ? formik.errors.experienceLevel
              : null
          }
        />

        <InputField
          label="Bio"
          rows={3}
          type="textarea"
          name="bio"
          placeholder="What makes you great at what you do?"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.bio}
          error={
            formik.touched.bio && formik.errors.bio ? formik.errors.bio : null
          }
        />
      </form>
    </div>
  );
}
