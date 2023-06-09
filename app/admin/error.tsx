"use client";
import { ErrorPanel } from "@/common/components/error-panel/ErrorPanel";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return <ErrorPanel errorMsg={error.message} onResetClick={() => reset()} />;
};

export default Error;
