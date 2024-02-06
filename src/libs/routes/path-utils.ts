export const handleRelativePath = (basePath : string, path? : string) => {
    if(path) {
        return `${basePath}/${path}`;
    }
    return `${basePath}`;
    
}