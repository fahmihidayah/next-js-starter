const BASE_PATH = "/admin/"

export const adminPathUtils = {

    admin : () => {
        return `${BASE_PATH}`;
    },
    
    categories : (path? : string) => {
        if(path) {
            return `${BASE_PATH}categories/${path}`;
        }
        return `${BASE_PATH}categories`;
        
    }, 

    posts : () => {
        return `${BASE_PATH}posts`;
    }
}