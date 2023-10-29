import React from "react";
import { Alert } from "@material-tailwind/react";
import {
  color,
  variant,
} from "@material-tailwind/react/types/components/alert";

type props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  message: string;
  color?: color;
  timeout?: number;
  variant?: variant;
  animate?: {
    mount: { y: number };
    unmount: { y: number };
  };
};

export default function PopupAlert({
  open,
  setOpen,
  message,
  color,
  timeout,
  variant,
  animate,
}: props) {
  if (open) {
    setTimeout(() => {
      setOpen(false);
    }, timeout || 5000);
  }

  return (
    <Alert
      open={open}
      onClose={() => setOpen(false)}
      color={color || "blue-gray"}
      variant={variant || "outlined"}
      animate={animate}
    >
      {message}
    </Alert>
  );
}
