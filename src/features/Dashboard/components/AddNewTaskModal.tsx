import Image from "next/image";
import { MouseEventHandler } from "react";
import { Button } from "@material-tailwind/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import SuccessModal from "@/features/Auth/components/SuccessModal";
import InputField from "@/shared/components/InputField";

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
    <div className=" bg-jubalModalBackgroundColor fixed inset-0 bg-opacity-70 flex justify-center items-center">
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

            <InputField
              label="Task Name"
              name="taskName"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.taskName}
              placeholder="What is the task about?"
              error={
                formik.touched.taskName && formik.errors.taskName
                  ? formik.errors.taskName
                  : null
              }
            />

            <InputField
              type="textarea"
              label="Task Details"
              name="taskDetails"
              placeholder="What is the task about?"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.taskDetails}
              rows={5}
            />
            <InputField
              label="Select Time to Start Task"
              name="startTime"
              type="time"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.startTime}
              placeholder="01:00 PM"
              error={
                formik.touched.startTime && formik.errors.startTime
                  ? formik.errors.startTime
                  : null
              }
            />
            <InputField
              label="Select Time to End Task"
              name="endTime"
              type="time"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.endTime}
              placeholder="01:00 PM"
              error={
                formik.touched.endTime && formik.errors.endTime
                  ? formik.errors.endTime
                  : null
              }
            />
            <InputField
              label="Select Date"
              name="startDate"
              type="date"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.date}
              placeholder="01:00 PM"
              error={
                formik.touched.date && formik.errors.date
                  ? formik.errors.date
                  : null
              }
            />

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
