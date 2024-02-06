import ContainerCard from "@/components/admin/Container-Card";
import { Category } from "@/features/categories/data/types";
import { Post } from "@/features/posts/data/types";
import PostFormComponent from "@/features/posts/form/PostFormComponent";
import { query } from "@/libs/action/query";

interface PostEditProps {
    params : {
        id: string;
    }
}

export default async function PostEdit({params} : PostEditProps) {
    const postResponse = await query<Post>({
        baseUrl : "posts",
        id : params.id
    });

    const categoriesResponse = await query<Category[]>({
        baseUrl : "categories"
    });

    return <ContainerCard>
        <PostFormComponent post={postResponse.data} categories={categoriesResponse.data}></PostFormComponent>
    </ContainerCard>

}