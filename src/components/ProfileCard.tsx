import { useEffect, useState } from "react";
import {
  Avatar,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import Socials from "src/components/Socials";

export default function Profile() {
  const [width, setWidth] = useState(window.innerWidth);
  const lgBreakpoint = 960;

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  if (width > lgBreakpoint) {
    return <ProfileCard />;
  }
  return (
    <AvatarCard>
      <div className="flex w-full flex-col gap-0.5">
        <div className="flex items-center justify-between">
          <Typography variant="h5" as="div" color="blue-gray">
            Josean Ayala
          </Typography>
        </div>
        <Typography color="blue-gray">Software Engineer</Typography>
        <div className="flex justify-start gap-4 p-0 pt-1">
          <Socials size="fa-lg" />
        </div>
      </div>
    </AvatarCard>
  );
}

export function ProfileCard() {
  return (
    <Card>
      <CardHeader floated={false} className="h-68">
        <img
          src="https://avatars.githubusercontent.com/u/36864389?v=4"
          alt="Picture of the author"
        />
      </CardHeader>
      <CardBody className="text-center">
        <Typography
          variant="h4"
          color="blue-gray"
          className="mb-2 lg:text-xl xl:text-2xl"
        >
          Josean Ayala
        </Typography>
        <Typography
          color="blue-gray"
          className="font-medium lg:text-sm xl:text-lg"
          textGradient
        >
          Software Engineer
        </Typography>
      </CardBody>
      <CardFooter className="flex items-center justify-center gap-4 pt-1">
        <Socials />
      </CardFooter>
    </Card>
  );
}

type TAvatarCard = {
  children?: React.ReactNode;
  padding?: string;
  size?: "sm" | "md" | "lg" | "xl" | "xxl";
};

export function AvatarCard({
  children,
  padding = "pb-8",
  size = "xxl",
}: TAvatarCard) {
  return (
    <Card color="transparent" shadow={false} className={`w-[275px] ${padding}`}>
      <CardHeader
        color="transparent"
        floated={false}
        shadow={false}
        className="mx-0 flex items-center gap-4"
      >
        <Avatar
          size={size}
          src="https://avatars.githubusercontent.com/u/36864389?v=4"
          alt="Picture of the author"
        />
        {children}
      </CardHeader>
    </Card>
  );
}
