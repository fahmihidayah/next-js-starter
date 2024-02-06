import ContainerCard from "@/components/admin/Container-Card";
import { Post } from "@/features/posts/data/types";
import PostDetailComponent from "@/features/posts/form/PostDetailComponent";
import { query } from "@/libs/action/query";
import { Button } from "@chakra-ui/react";

interface DetailPostProps {
    params: {
        id: string;
    }
}

export default async function DetailPost({ params }: DetailPostProps) {
    const postResponse = await query<Post>({
        baseUrl: "posts",
        id: params.id
    })
    return <ContainerCard>
        <>
            <Button colorScheme="green" size={"sm"} mb={5}>
                Edit
            </Button>
            <PostDetailComponent post={postResponse.data!!} isShowAll={true}>

            </PostDetailComponent>
        </>
    </ContainerCard>
}