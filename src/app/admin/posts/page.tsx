import ContainerCard from "@/components/admin/Container-Card"
import { Post } from "@/features/posts/data/types"
import PostTable from "@/features/posts/table/PostTable"
import { query } from "@/libs/action/query"
import { routePathUtils } from "@/libs/routes"
import { Button, Container, Flex, Heading } from "@chakra-ui/react"
import Link from "next/link"

interface ListPostsProps {
    params: {

    },

    searchParams: {

    }
}
export default async function ListPosts({ params }: ListPostsProps) {

    const response = await query<Post[]>({
        baseUrl: "posts"
    });

    return <ContainerCard>
        <>
            <Flex justifyContent={"space-between"}>
                <Heading size={"md"} mb={4} >
                    Posts
                </Heading>
                <Link href={routePathUtils.admin().posts("create")}>
                    <Button size={"sm"} colorScheme="blue">Create</Button>
                </Link>
            </Flex>
            <PostTable data={response.data ?? []}></PostTable>
        </>
    </ContainerCard>
}