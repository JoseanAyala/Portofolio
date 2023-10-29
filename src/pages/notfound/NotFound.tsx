import { Button, Typography } from "@material-tailwind/react";
import { StickyNavbar } from "src/components/StickyNavbar";

export default function NotFound() {
  const handleBack = () => {
    window.history.back();
  };
  return (
    <>
      <StickyNavbar />
      <div className="flex h-screen w-screen flex-col items-center justify-start p-8">
        <img
          src="https://i.imgur.com/QIxIKBH.png"
          alt="404 Illustration"
          className="w1/3 h-1/3"
        />
        <Typography variant="h1" className="py-2">
          This page is a Ghost
        </Typography>
        <Typography variant="lead" as="h2" className="w-1/2 py-2">
          Once alive and now dead, this page is now a ghost. But don't worry,
          you can still get away from it. Just click the button below.
        </Typography>
        <Button onClick={handleBack} size="lg" className="py-2">
          Go Back
        </Button>
      </div>
    </>
  );
}
