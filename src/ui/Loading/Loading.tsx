import React from "react";
import { useEffect, useState } from "react";

import { useTheme } from "@emotion/react";

import { LoadingProps } from "@/ui/Loading/types";

export const Loading: React.FC<LoadingProps> = ({ big, ...rest }) => {
  const [length, setLength] = useState(3);
  const theme = useTheme();
  useEffect(() => {
    const interval = setInterval(() => {
      setLength(length === 3 ? 1 : length + 1);
    }, 200);
    return () => clearInterval(interval);
  });
  return (
    <span {...rest} style={{ width: 10, color: theme.colors.primary100, ...rest.style }}>
      {big
        ? Array.from({ length }, () => "●").join("")
        : Array.from({ length }, () => ".").join("")}
    </span>
  );
};
export default Loading;
