import { Button } from "@material-tailwind/react";
interface ToDoListItemProps {
  name: string;
  startTime: string;
  finishTime: string;
  day: string;
}

export default function ToDoListItem({
  name,
  startTime,
  finishTime,
  day,
}: ToDoListItemProps) {
  return (
    <div className="p-[2rem] bg-white rounded-[20px] mb-[2rem]">
      <div className="flex justify-between mb-[1rem]">
        <p className="text-[1.4rem] text-jubalFooterText">{name}</p>
        <p className="text-[1.6rem] text-jubalFAQGrey">{day}</p>
      </div>

      <div className="flex justify-between items-end">
        <p className="text-[1.5rem] font-[700] text-jubalNav">{`${startTime}-${finishTime}`}</p>
        <Button
          variant="outlined"
          className=" border-jubalViolet w-[max-content] normal-case text-[1.2rem] py-[.8rem] text-jubalViolet px-[1.6rem] rounded-[1rem]"
        >
          View
        </Button>
      </div>
    </div>
  );
}
