const BASE_PATH = "/admin/"

export const adminPathUtils = {

    admin : () => {
        return `${BASE_PATH}`;
    },
    
    categories : () => {
        return `${BASE_PATH}categories`;
    }, 

    posts : () => {
        return `${BASE_PATH}posts`;
    }
}