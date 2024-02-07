import { routePathUtils } from "@/libs/routes";
import { Session, User } from "next-auth";
import { FiBox, FiFile, FiMessageSquare } from "react-icons/fi";

export function  getMenuItems(user? : Session) { 
    return  [
        {
          name: "Dashboard",
          icon: FiBox,
          action: routePathUtils.admin().admin()
        },
        {
          name: "Categories",
          icon: FiMessageSquare,
          action: routePathUtils.admin().categories()
        },
        {
          name: "Posts",
          icon: FiFile,
          action: routePathUtils.admin().posts()
        }
      ]
}