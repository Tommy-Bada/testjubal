import SideBar from "@/features/Dashboard/components/SideBar";
import TalentHeader from "@/features/Dashboard/components/TalentHeader";
import ManagerTopData from "@/features/Dashboard/components/ManagerTopData";
import ToDoList from "@/features/Dashboard/components/ToDoList";
import ManagerGigBox from "@/features/Dashboard/components/ManagerGigBox";
import { useState } from "react";
import AddNewTaskModal from "@/features/Dashboard/components/AddNewTaskModal";
export default function Manager() {
  const [showModal, setShowModal] = useState(false);
  const handleAddNewTask = () => {
    setShowModal(true);
  };

  return (
    <div className="flex bg-gradient-to-r from-jubalGradientBlueFaded to-jubalGradientGreenFaded py-[2rem] px-[3rem] h-[100%]">
      <SideBar />
      <div className="  bg-white p-[2rem] ml-[30rem] rounded-[2rem] w-[100%]">
        <TalentHeader />
        <ManagerTopData />
        <div className="flex justify-between w-[100%]">
          <ManagerGigBox />
          <ToDoList handleAddNewTask={handleAddNewTask} />
        </div>
      </div>
      <AddNewTaskModal
        isVisible={showModal}
        handleRemoveModal={() => setShowModal(false)}
      />
    </div>
  );
}
