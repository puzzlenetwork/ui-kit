import React, { CSSProperties, JSX } from "react";

import { Config } from "react-popper-tooltip/dist/types";

export interface TooltipProps {
  content: string | JSX.Element;
  config?: Config;
  fixed?: boolean;
  containerStyles?: CSSProperties;
  children: React.ReactNode;
}
