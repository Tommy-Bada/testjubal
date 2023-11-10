import { Button } from "@material-tailwind/react";
interface NotificationItemProps {
  name: string;
  type: string;
  action: string;
}

export default function NotificationItem({
  name,
  type,
  action,
}: NotificationItemProps) {
  return (
    <div className="py-[1rem] ">
      <p className="text-[1.6rem] text-jubalFooterText">{name}</p>
      <div className="flex items-end justify-between">
        <p className="text-[1.8rem] font-[700] text-jubalNav">{type}</p>
        <Button
          variant="outlined"
          className=" border-jubalViolet w-[max-content] normal-case text-[1.4rem] py-[1rem] text-jubalViolet px-[2rem] rounded-[1rem]"
        >
          {action}
        </Button>
      </div>
    </div>
  );
}
