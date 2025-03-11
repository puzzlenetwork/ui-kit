import { CSSProperties } from "react";

export type ITab = {
  name: string;
  additionalInfo?: string | number;
};

export interface TabsProps {
  tabs: ITab[];
  activeTab: number;
  setActive: (index: number) => void;
  style?: CSSProperties;
  tabStyle?: CSSProperties;
}
