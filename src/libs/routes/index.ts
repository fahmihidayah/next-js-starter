import { adminPathUtils } from "./admin"
import { authPathUtils } from "./auth"

export const routePathUtils = {
    home : () => {
        return "/"
    },
    
    auth: () => {
        return authPathUtils;
    },

    admin: () => {
        return adminPathUtils;
    }
}
