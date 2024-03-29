import ContainerCard from "@/components/admin/Container-Card";
import SimpleTable from "@/components/table/SimpleTable"
import { Category } from "@/features/categories/data/types";
import CategoryTable from "@/features/categories/table/CategoryTable";
import { query } from "@/libs/action/query";
import axiosInstance from "@/libs/network/axios";
import { routePathUtils } from "@/libs/routes";
import { BaseResponse } from "@/libs/types/base";
import { Button, Card, CardBody, Container, Flex, Heading } from "@chakra-ui/react"
import { ColumnDef, Table, getCoreRowModel, getFilteredRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table";
import axios from "axios";
import Link from "next/link";
import { useMemo } from "react";
import { FiEdit, FiEye, FiTrash } from "react-icons/fi";
interface ListCategoriesProps {
    params: {

    },

    searchParams: {

    }
}

export default async function ListCategories({ }: ListCategoriesProps) {
    const response = await query<Category[]>({ baseUrl: "/categories" })

    return <ContainerCard>
        <Flex justifyContent={"space-between"}>
            <Heading size={"md"} mb={4} >
                Categories
            </Heading>
            <Link href={routePathUtils.admin().categories("create")}>
                <Button size={"sm"} colorScheme="blue">Create</Button>
            </Link>
        </Flex>
        <CategoryTable data={response.data ?? []}></CategoryTable>
    </ContainerCard>

}