import { Button } from "@material-tailwind/react";
interface NotificationItemProps {
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
}: NotificationItemProps) {
  return (
    <div className="p-[2rem] bg-white rounded-[20px] mb-[2rem]">
      <div className="flex justify-between">
        <p className="text-[1.6rem] text-jubalFooterText">{name}</p>
        <p className="text-[1.4rem] text-[#727A86]">{day}</p>
      </div>

      <div className="flex justify-between items-end">
        <p className="text-[1.8rem] font-[700] text-jubalNav">{`${startTime}-${finishTime}`}</p>
        <Button
          variant="outlined"
          className=" border-jubalViolet w-[max-content] normal-case text-[1.4rem] py-[1rem] text-jubalViolet px-[2rem] rounded-[1rem]"
        >
          View
        </Button>
      </div>
    </div>
  );
}
