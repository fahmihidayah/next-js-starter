const BASE_PATH = "/auth/"

export const authPathUtils = {

    login : () => {
        return `${BASE_PATH}login`;
    }, 

    register : () => {
        return `${BASE_PATH}register`;
    }
}