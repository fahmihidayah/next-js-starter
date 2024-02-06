import { FormState } from "@/libs/types/base";
import { Post, PostForm, postValidationSchema } from "./types";
import { doMutateAction } from "@/libs/action/mutate-action";
import { routePathUtils } from "@/libs/routes";
import validate from "@/libs/validation-helper";

export async function deletePost(postForm : PostForm) : Promise<FormState>{
    return await doMutateAction({
        basePath : "posts",
        method : "delete",
        id : postForm.id,
        redirect : routePathUtils.admin().posts()
    })
}

export async function postAction(postForm : PostForm) : Promise<FormState> {
    const formStateResult = validate({
        form : postForm,
        validationScheme : postValidationSchema
    })
    
    if(formStateResult) {
        return formStateResult;
    }

    console.log(postForm)
    return await doMutateAction({
        basePath : "posts",
        method: postForm.id ? "patch" : "post",
        params : {... postForm, category_id : +postForm.category_id},
        id : postForm.id,
        redirect : routePathUtils.admin().posts()
    })
}