import { Spinner } from "@nextui-org/react";

export default function Loading() {
  return (
    <div className="h-screen z-30  grid place-items-center">
      <Spinner label="Loading..." color="success" size="md" />
    </div>
  );
}
