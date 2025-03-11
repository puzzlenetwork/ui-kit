import React, { useState } from "react";

import styled from "@emotion/styled";
import arrowIcon from "@src/icons/arrowRightBorderless.svg";
import check from "@src/icons/checkMark.svg";

import { Column } from "@/ui/Flex";
import { SelectProps } from "@/ui/Select";
import { SizedBox } from "@/ui/SizedBox";
import { Tooltip } from "@/ui/Tooltip";

const Root = styled.div<{ focused?: boolean }>`
  display: flex;
  padding: 8px 8px 8px 12px;
  border-radius: 10px;
  background: ${({ focused, theme }) => (focused ? theme.colors.white : theme.colors.primary100)};
  border: 1px solid
    ${({ focused, theme }) => (focused ? theme.colors.blue500 : theme.colors.primary100)};
  outline: none;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.primary800};
  align-items: center;
  white-space: nowrap;

  .menu-arrow {
    transition: 0.4s;
    transform: ${({ focused }) => (focused ? "rotate(-90deg)" : "rotate(90deg)")};
  }
`;
const Option = styled.div<{ active?: boolean }>`
  width: 100%;
  display: flex;
  cursor: pointer;
  position: relative;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: ${({ active, theme }) =>
    active ? theme.colors.select.selectedTextColor : theme.colors.primary800};
  padding: 10px 12px 10px 22px;
  background: ${({ theme }) => `${theme.colors.white}`};
  margin: 0 -16px;
  white-space: nowrap;

  :hover {
    background: ${({ theme }) => `${theme.colors.primary100}`};
  }

  ::after {
    transition: 0.4s;
    position: absolute;
    right: 12px;
    ${({ active }) => active && `content: url(${check})`};
  }
`;

const Select: React.FC<SelectProps> = ({ options, selected, onSelect, ...rest }) => {
  const [focused, setFocused] = useState(false);
  return (
    <Tooltip
      config={{
        placement: "bottom-start",
        trigger: "click",
        onVisibleChange: setFocused,
      }}
      content={
        <Column crossAxisSize="max">
          {options.map((v) => {
            const active = selected?.key === v.key;
            return (
              <Option
                active={active}
                key={v.key + "_option"}
                onClick={() => {
                  onSelect(v);
                }}
              >
                {v.title}
              </Option>
            );
          })}
        </Column>
      }
    >
      <Root
        focused={focused}
        onClick={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        {...rest}
      >
        {selected?.title ?? options[0].title}
        <SizedBox width={10} />
        <img src={arrowIcon} className="menu-arrow" alt="arrow" />
      </Root>
    </Tooltip>
  );
};
export default Select;
