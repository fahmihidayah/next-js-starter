import { authPathUtils } from "./auth"

export const routePathUtils = {
    home : () => {
        return "/"
    },
    
    auth: () => {
        return authPathUtils
    }
}
