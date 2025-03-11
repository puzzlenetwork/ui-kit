import React from "react";

import CloseIcon from "@src/icons/close.svg?react";
import RcDialog from "rc-dialog";

import { DialogProps } from "@/ui/Dialog";

const Dialog: React.FC<DialogProps> = ({ children, ...rest }) => {
  return (
    <RcDialog
      closeIcon={<CloseIcon style={{ marginTop: 8 }} />}
      animation="zoom"
      maskAnimation="fade"
      {...rest}
    >
      {children}
    </RcDialog>
  );
};
export default Dialog;
