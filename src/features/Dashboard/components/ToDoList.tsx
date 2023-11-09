import { config } from "@/config";
import ToDoListItem from "./ToDoListItem";
import Image from "next/image";
import { ImageIcons } from "@/shared/components/ImageIcons";
import { toDoListIcon } from "@/image";

type ToDoListProps = {
  handleAddNewTask: () => void;
};

export default function ToDoList({ handleAddNewTask }: ToDoListProps) {
  return (
    <div className="bg-white rounded-[2rem] w-[48%] p-[2rem]">
      <div className="flex items-center justify-between">
        <div className="flex items-center ">
          <div className=" rounded-[50%] bg-jubalDashboardBackground w-[5rem] h-[5rem] flex justify-center items-center ">
            <Image
              src={ImageIcons.toDoListIcon}
              alt="Notification Icon"
              width="100"
              height="100"
            />
          </div>
          <p className="text-jubalNav text-[1.6rem] font-[700] ml-[1rem]">
            To do List
          </p>
        </div>
        <p className="text-[1.4rem] cursor-pointer" onClick={handleAddNewTask}>
          Add New Task
        </p>
      </div>
      <div className="bg-jubalDashboardBackground px-[2rem] py-[3rem] rounded-[1rem] mt-[2rem]">
        <ToDoListItem
          name="Recording Session"
          startTime="10:00 AM"
          finishTime="12:00 PM"
          day="Today"
        />
        <ToDoListItem
          name="Recording Session"
          startTime="10:00 AM"
          finishTime="12:00 PM"
          day="Today"
        />
        <ToDoListItem
          name="Recording Session"
          startTime="10:00 AM"
          finishTime="12:00 PM"
          day="Today"
        />
        <ToDoListItem
          name="Recording Session"
          startTime="10:00 AM"
          finishTime="12:00 PM"
          day="Today"
        />
      </div>
    </div>
  );
}
