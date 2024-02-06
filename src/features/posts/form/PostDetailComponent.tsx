import { Heading, Tag, Text } from "@chakra-ui/react";
import { Post } from "../data/types";

interface PostDetailComponentProps {
    post : Post;
    isShowAll : boolean;

}

export default function PostDetailComponent({post, isShowAll} : PostDetailComponentProps) {
    return <> 
        <Heading size={"md"} mb={5}>{post.title}</Heading>
        <Tag colorScheme="blue" mb={5}>{post.category?.name}</Tag>
        {isShowAll && <Text>{post.content}</Text>}
   </>
}