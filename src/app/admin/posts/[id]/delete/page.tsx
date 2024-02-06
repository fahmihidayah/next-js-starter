import ContainerCard from "@/components/admin/Container-Card";
import ErrorText from "@/components/form/ErrorText";
import SubmitButton from "@/components/form/SubmitButton";
import { deletePost } from "@/features/posts/data/action";
import { Post } from "@/features/posts/data/types";
import PostDeleteFormComponent from "@/features/posts/form/PostDeleteFormComponent";
import PostDetailComponent from "@/features/posts/form/PostDetailComponent";
import { query } from "@/libs/action/query";
import { routePathUtils } from "@/libs/routes";
import { FormState } from "@/libs/types/base";
import { Button, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useFormState } from "react-dom";

interface PostDeletePageProps {
    params : {
        id : string;
    }
}

export default async function PostDeletePage({params} : PostDeletePageProps) {
    const postResponse = await query<Post>({
        baseUrl : "posts",
        id : params.id
    })
    
    return <ContainerCard>
        <PostDeleteFormComponent post={postResponse.data!!} ></PostDeleteFormComponent>
    </ContainerCard>
}