import Image from "next/image";
import ProfileHeader from "./ProfileHeader";
import { useFormik } from "formik";
import { useEffect } from "react";
import * as Yup from "yup";
import { CountryDropdown } from "react-country-region-selector";

export default function ProfileBox() {
  useEffect(() => {
    // Trigger an initial validation check when the component mounts
    formik.validateForm();
  }, []);

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
        <div className="mb-[2rem] w-[46%]">
          <label
            className="text-[1.6rem] font-[600] text-jubalGrey"
            htmlFor="name"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="px-[1.4rem] py-[1rem] w-[100%] rounded-lg border-[2px] border-jubalFormBorder mt-[1rem] text-[1.6rem]"
            placeholder="Please Enter Your Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-[1.3rem] text-red-700">
              {formik.errors.name}
            </div>
          ) : null}
        </div>
        <div className="mb-[2rem] w-[46%]">
          <label
            className="text-[1.6rem] font-[600] text-jubalGrey"
            htmlFor="name"
          >
            Username{" "}
            <span className="text-[1.6rem] text-jubalFooterText font-[400] ">{`(Profile Link)`}</span>
          </label>
          <input
            id="userName"
            name="userName"
            type="text"
            className="px-[1.4rem] py-[1rem] w-[100%] rounded-lg border-[2px] border-jubalFormBorder mt-[1rem] text-[1.6rem]"
            placeholder="thejubal.com/"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.userName}
          />
          {formik.touched.userName && formik.errors.userName ? (
            <div className="text-[1.3rem] text-red-700">
              {formik.errors.userName}
            </div>
          ) : null}
        </div>
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
        <div className="mb-[2rem] w-[46%]">
          <label className="text-[1.6rem]">Select Your Skill Or Talent</label>
          <select
            className="px-[1.4rem] py-[1rem] w-[100%] rounded-lg border-[2px] border-jubalFormBorder mt-[1rem] text-[1.6rem]"
            id="skillOrTalent"
            name="skillOrTalent"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.skillOrTalent}
          >
            <option value="Sound Engineer">Sound Engineer</option>
            <option value="Music Producer">Music Producer</option>
            <option value="Pianist">Pianist</option>
          </select>
          {formik.touched.skillOrTalent && formik.errors.skillOrTalent ? (
            <div className="text-[1.3rem] text-red-700">
              {formik.errors.skillOrTalent}
            </div>
          ) : null}
        </div>
        <div className="mb-[2rem] w-[46%] flex items-center">
          <p className="text-[1.6rem] text-left">Add More Skills</p>
        </div>
        <div className="mb-[2rem] w-[46%]">
          <label
            className="text-[1.6rem] font-[600] text-jubalGrey"
            htmlFor="name"
          >
            Rate{" "}
          </label>
          <div className="px-[1.4rem] py-[1rem] w-[100%] rounded-lg border-[2px] border-jubalFormBorder mt-[1rem] text-[1.6rem] flex justify-between items-center">
            <input
              id="rate"
              name="rate"
              type="text"
              className=" w-[100%] text-[1.6rem] focus:outline-none "
              placeholder="20"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.rate}
            />
            <p className="text-[1.6rem] text-jubalFAQGrey">$/hr</p>
          </div>
          {formik.touched.rate && formik.errors.rate ? (
            <div className="text-[1.3rem] text-red-700">
              {formik.errors.rate}
            </div>
          ) : null}
        </div>
        <div className="mb-[2rem] w-[46%]">
          <label className="text-[1.6rem]">Experience Level</label>
          <select
            className="px-[1.4rem] py-[1rem] w-[100%] rounded-lg border-[2px] border-jubalFormBorder mt-[1rem] text-[1.6rem]"
            id="skillOrTalent"
            name="skillOrTalent"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.experienceLevel}
          >
            <option value="1 Year">1 Year</option>
            <option value="1 Year">2 Year</option>
            <option value="1 Years">3-5 Years</option>
            <option value="1 Years">4-5 Years</option>
          </select>
          {formik.touched.experienceLevel && formik.errors.experienceLevel ? (
            <div className="text-[1.3rem] text-red-700">
              {formik.errors.experienceLevel}
            </div>
          ) : null}
        </div>
        <div className="w-[100%]">
          <label className="text-[1.6rem]">Bio</label>
          <textarea
            className="px-[1.4rem] py-[1rem] w-[100%] rounded-lg border-[2px] border-jubalFormBorder mt-[1rem] text-[1.6rem]"
            placeholder="What makes you great at what you do?"
          ></textarea>
        </div>
      </form>
    </div>
  );
}
