import { useEffect, useState } from "react";
import { EDeviceType } from "@/lib/constants";

const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState<EDeviceType>(
    EDeviceType.Desktop
  );
  const [width, setWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const [height, setHeight] = useState<number>(
    typeof window !== "undefined" ? window.innerHeight : 0
  );

  const handleResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    if (typeof window === "undefined") {
      return; // Exit early if running on the server
    }

    window.addEventListener("resize", handleResize);

    // Initial device type check
    if (width < 768) {
      setDeviceType(EDeviceType.Mobile);
    } else {
      setDeviceType(EDeviceType.Desktop);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  return deviceType;
};

export default useDeviceType;
