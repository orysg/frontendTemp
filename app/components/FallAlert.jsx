"use client";
import { useEffect, useState } from "react";
import { Alert } from "@material-tailwind/react";

const fetchFallStatus = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const detected = Math.random() < 0.5;
      resolve(detected);
    }, 1000);
  });
};

export default function FallAlert() {
  const [fallDetected, setFallDetected] = useState(false);

  useEffect(() => {
    const checkFallStatus = async () => {
      const detected = await fetchFallStatus();
      setFallDetected(detected);
    };
    const intervalId = setInterval(checkFallStatus, 5000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="ps-24 pr-24 pt-3 flex justify-center items-center">
      <Alert
        color={fallDetected ? "red" : "green"}
        className="transition-all duration-300"
      >
        {fallDetected
          ? "Fall detected! Please check immediately."
          : "No fall detected."}
      </Alert>
    </div>
  );
}
