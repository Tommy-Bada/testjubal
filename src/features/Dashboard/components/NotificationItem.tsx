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
    <div>
      <p>{name}</p>
      <div>
        <p>{type}</p>
        <Button
          variant="filled"
          className=" bg-jubalViolet w-[100%] normal-case text-[1.6rem] py-[1rem]"
        >
          {action}
        </Button>
      </div>
    </div>
  );
}
