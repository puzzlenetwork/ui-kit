import React from "react";

import styled from "@emotion/styled";
import { usePopperTooltip } from "react-popper-tooltip";

import { TooltipProps } from "@/ui/Tooltip/types.ts";

const Root = styled.div<{ fixed?: boolean }>`
  display: flex;
  background: ${({ theme }) => `${theme.colors.white}`};
  max-width: 320px;
  min-width: 160px;
  z-index: 2;
  width: max-content;
  box-sizing: border-box;
  padding: 8px 16px 12px;
  border: 1px solid ${({ theme }) => `${theme.colors.primary100}`};
  border-radius: 10px;
  box-shadow:
    0 6px 14px rgba(0, 0, 0, 0.06),
    0 16px 28px rgba(0, 0, 0, 0.07);
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
`;

export const Tooltip: React.FC<TooltipProps> = ({ containerStyles, children, content, config }) => {
  const { getTooltipProps, setTooltipRef, setTriggerRef, visible } = usePopperTooltip({
    ...config,
  });
  return (
    <Container>
      <div ref={setTriggerRef} style={{ cursor: "pointer", ...containerStyles }}>
        {children}
      </div>
      {visible && (
        <Root ref={setTooltipRef} {...getTooltipProps()}>
          {content}
        </Root>
      )}
    </Container>
  );
};
