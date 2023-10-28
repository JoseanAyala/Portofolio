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
        <img src="/assets/profile.png" alt="Profile Image" />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          Josean Ayala
        </Typography>
        <Typography color="blue-gray" className="font-medium" textGradient>
          Software Engineer
        </Typography>
      </CardBody>
      <CardFooter className="flex items-center justify-center gap-4 pt-2">
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
    <Card
      color="transparent"
      shadow={false}
      className={`w-full max-w-[26rem] ${padding}`}
    >
      <CardHeader
        color="transparent"
        floated={false}
        shadow={false}
        className="mx-0 flex items-center gap-4"
      >
        <Avatar size={size} src="/assets/profile.png" alt="Profile Image" />
        {children}
      </CardHeader>
    </Card>
  );
}
