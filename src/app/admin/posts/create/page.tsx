import ContainerCard from "@/components/admin/Container-Card";
import { Category } from "@/features/categories/data/types";
import PostFormComponent from "@/features/posts/form/PostFormComponent";
import { query } from "@/libs/action/query";

export default async function PostCreate() {

    const categoryResponse = await query<Category[]>({
        baseUrl : "categories"
    });

    return <ContainerCard>
        <PostFormComponent categories={categoryResponse.data ?? []}></PostFormComponent>
    </ContainerCard>
}