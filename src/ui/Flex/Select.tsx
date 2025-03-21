import styled from "@emotion/styled";

import { IFlexProps } from "@/ui/Flex/types.ts";

export const Row = styled.div<IFlexProps>`
  display: flex;
  flex-direction: row;

  justify-content: ${({ justifyContent }) => justifyContent ?? "start"};
  align-items: ${({ alignItems }) => alignItems ?? "start"};
  height: ${({ crossAxisSize }) => (crossAxisSize === "max" ? "100%" : "fit-content")};
  width: ${({ mainAxisSize }) => (mainAxisSize === "fit-content" ? "fit-content" : "100%")};
`;

export const Column = styled.div<IFlexProps>`
  display: flex;
  flex-direction: column;
  justify-content: ${({ justifyContent }) => justifyContent ?? "start"};
  align-items: ${({ alignItems }) => alignItems ?? "start"};
  width: ${({ crossAxisSize }) => (crossAxisSize === "max" ? "100%" : "fit-content")};
  height: ${({ mainAxisSize }) => (mainAxisSize === "stretch" ? "100%" : "fit-content")};
`;

export const adaptiveStyleTemplate = `
  & .desktop {
    display: none;
    @media (min-width: 880px) {
      display: flex;
    }
  }
  & .mobile {
    display: flex;
    @media (min-width: 880px) {
      display: none;
    }
  }
`;

export const AdaptiveRow = styled(Row)(adaptiveStyleTemplate);
export const AdaptiveColumn = styled(Column)(adaptiveStyleTemplate);
