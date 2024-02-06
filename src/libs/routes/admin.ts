import { handleRelativePath } from "./path-utils";

const BASE_PATH = "/admin/"

export const adminPathUtils = {

    admin : () => {
        return `${BASE_PATH}`;
    },
    
    categories : (path? : string) => {
        return handleRelativePath(`${BASE_PATH}categories`, path);
    }, 

    posts : (path? : string) => {
        return handleRelativePath(`${BASE_PATH}posts`, path);
    }
}