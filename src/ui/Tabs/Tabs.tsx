import React from "react";

import styled from "@emotion/styled";

import { TabsProps } from "@/ui/Tabs/types.ts";
import { Text } from "@/ui/Text";

const Root = styled.div`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary300};
  width: 100%;
`;

const Tab = styled.div<{ active?: boolean }>`
  text-align: center;
  margin-right: 24px;
  padding-bottom: 12px;
  border-bottom: 4px solid #7075e9;
  cursor: pointer;
  border-bottom: ${({ active, theme }) =>
    active ? `4px solid ${theme.colors.blue500}` : "4px solid transparent"};
  margin-bottom: -1px;
  user-select: none;
  transition: 0.4s;
  :hover {
    border-bottom: ${({ active, theme }) => !active && `4px solid ${theme.colors.primary300}`}
  }
}
`;
export const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, setActive, style, tabStyle }) => {
  return (
    <Root style={style}>
      {tabs.map(({ additionalInfo, name }, index) => (
        <Tab
          key={index}
          active={index === activeTab}
          onClick={() => setActive(index)}
          style={tabStyle}
        >
          <Text weight={500}>
            {name}
            {additionalInfo != null && additionalInfo !== 0 && (
              <span style={{ color: "#8082C5", marginLeft: 10 }}>{additionalInfo}</span>
            )}
          </Text>
        </Tab>
      ))}
    </Root>
  );
};
