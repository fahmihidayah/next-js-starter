'use client'
import { useFormState } from "react-dom";
import { deletePost } from "../data/action";
import { Post } from "../data/types";
import { FormState } from "@/libs/types/base";
import ErrorText from "@/components/form/ErrorText";
import { Button, Flex, Text } from "@chakra-ui/react";
import PostDetailComponent from "./PostDetailComponent";
import SubmitButton from "@/components/form/SubmitButton";
import Link from "next/link";
import { routePathUtils } from "@/libs/routes";

interface PostDeleteFormComponentProps {
    post : Post
}

export default function PostDeleteFormComponent({post} : PostDeleteFormComponentProps)  {
    const [formState, action] = useFormState(deletePost.bind(null,post), {} as FormState);
    return <>
    
    <ErrorText message={formState.message}></ErrorText>
    <Text>Do you want to delete this item?</Text>
    <PostDetailComponent  post={post} isShowAll={false} />
    <form action={action}>
        <Flex>
            <SubmitButton colorScheme="red" me={3} type="submit">Yes</SubmitButton>
            <Link href={routePathUtils.admin().posts()}>
                <Button >No</Button>
            </Link>
        </Flex>
    </form>
    </>
    
}