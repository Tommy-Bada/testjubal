import Image from "next/image";
import { MouseEventHandler } from "react";
import { Button } from "@material-tailwind/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState, useEffect } from "react";
import SuccessModal from "@/features/Auth/components/SuccessModal";

interface AddNewTaskModalProps {
  isVisible: boolean;
}

export default function AddNewTaskModal({
  isVisible,
  handleRemoveModal,
}: AddNewTaskModalProps & { handleRemoveModal: MouseEventHandler }) {
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleAddNewTask = () => {
    setShowSuccessModal(true);
  };

  useEffect(() => {
    // Trigger an initial validation check when the component mounts
    formik.validateForm();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formik = useFormik({
    initialValues: {
      taskName: "",
      taskDetails: "",
      startTime: "",
      endTime: "",
      date: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  if (!isVisible) return null;

  return (
    <div className="bg-[#D9D9D9] fixed inset-0 bg-opacity-70 flex justify-center items-center">
      <div className="bg-white w-[80%] h-[90%] rounded-[2rem] p-[3rem] ">
        <div className="flex justify-end" onClick={handleRemoveModal}>
          <Image
            src="/cancel.svg"
            alt="cancel icon"
            width="30"
            height="30"
            className="w-[2rem]"
          />
        </div>
        <div className="flex justify-center">
          <form onSubmit={formik.handleSubmit} className="mt-[3rem] w-[50%]">
            <h2 className="text-[2.2rem] font-[700] text-jubalGrey text-center">
              Add New Task
            </h2>

            <div className="mb-[2rem] w-[100%]">
              <label
                className="text-[1.6rem] font-[600] text-jubalGrey"
                htmlFor="taskName"
              >
                Task Name
              </label>
              <input
                id="taskName"
                name="taskName"
                type="text"
                className="px-[1.4rem] py-[1rem] w-[100%] rounded-lg border-[2px] border-jubalFormBorder mt-[1rem] text-[1.6rem]"
                placeholder="Give the task a Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.taskName}
              />
              {formik.touched.taskName && formik.errors.taskName ? (
                <div className="text-[1.3rem] text-red-700">
                  {formik.errors.taskName}
                </div>
              ) : null}
            </div>

            <div className="w-[100%] mb-[2rem]">
              <label
                className="text-[1.6rem] font-[600] text-jubalGrey"
                htmlFor="taskDetails"
              >
                Task Details
              </label>
              <br />
              <textarea
                id="taskDetails"
                name="taskDetails"
                className="px-[1.4rem] py-[1rem] w-[100%] rounded-lg border-[2px] border-jubalFormBorder mt-[1rem] text-[1.6rem]"
                placeholder="What is the task about?"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.taskDetails}
              ></textarea>
            </div>

            <div className="mb-[2rem] w-[100%]">
              <label
                className="text-[1.6rem] font-[600] text-jubalGrey"
                htmlFor="startTime"
              >
                Select Time to Start Task
              </label>
              <input
                id="startTime"
                name="startTime"
                type="time"
                className="px-[1.4rem] py-[1rem] w-[100%] rounded-lg border-[2px] border-jubalFormBorder mt-[1rem] text-[1.6rem]"
                placeholder="Give the task a Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.startTime}
              />
              {formik.touched.startTime && formik.errors.startTime ? (
                <div className="text-[1.3rem] text-red-700">
                  {formik.errors.startTime}
                </div>
              ) : null}
            </div>

            <div className="mb-[2rem] w-[100%]">
              <label
                className="text-[1.6rem] font-[600] text-jubalGrey"
                htmlFor="endTime"
              >
                Select Time to End Task
              </label>
              <input
                id="endTime"
                name="endTime"
                type="time"
                className="px-[1.4rem] py-[1rem] w-[100%] rounded-lg border-[2px] border-jubalFormBorder mt-[1rem] text-[1.6rem]"
                placeholder=""
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.endTime}
              />
              {formik.touched.endTime && formik.errors.endTime ? (
                <div className="text-[1.3rem] text-red-700">
                  {formik.errors.endTime}
                </div>
              ) : null}
            </div>

            <div className="mb-[2rem] w-[100%]">
              <label
                className="text-[1.6rem] font-[600] text-jubalGrey"
                htmlFor="date"
              >
                Select Date
              </label>
              <input
                id="date"
                name="date"
                type="date"
                className="px-[1.4rem] py-[1rem] w-[100%] rounded-lg border-[2px] border-jubalFormBorder mt-[1rem] text-[1.6rem]"
                placeholder=""
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.endTime}
              />
              {formik.touched.date && formik.errors.date ? (
                <div className="text-[1.3rem] text-red-700">
                  {formik.errors.date}
                </div>
              ) : null}
            </div>
            <div className="text-center">
              <Button
                className={`${
                  formik.isValid ? "bg-jubalViolet" : "bg-jubalFooterGrey"
                } w-[max-content] normal-case text-[1.6rem] py-[1.2rem]`}
                type="submit"
                disabled={!formik.isValid}
                onClick={handleAddNewTask}
              >
                Add New Task
              </Button>
            </div>
          </form>
        </div>
      </div>
      {showSuccessModal && (
        <SuccessModal
          isVisible={showSuccessModal}
          handleRemoveModal={() => setShowSuccessModal(false)}
          text="Your New Task has been added"
          buttonText="Go to My Manager"
          link="/manager"
        />
      )}
    </div>
  );
}
