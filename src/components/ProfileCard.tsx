import Socials from "src/components/Socials";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

export default function ProfileCard() {
  return (
    <Card className="w-full">
      <CardHeader floated={false} className="h-68">
        <img src="/assets/profile.png" alt="Profile Image" />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          Josean Ayala
        </Typography>
        <Typography color="blue-gray" className="font-medium" textGradient>
          Full Stack Developer
        </Typography>
      </CardBody>
      <CardFooter className="flex justify-center gap-7 pt-2">
        <Socials />
      </CardFooter>
    </Card>
  );
}
