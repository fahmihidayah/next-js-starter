import { IconType } from "react-icons"

export interface SidebarItem {
    name: string;
    icon?: IconType;
    action?: string;
  }