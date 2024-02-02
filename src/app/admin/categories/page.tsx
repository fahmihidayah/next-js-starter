'use client'
import SimpleTable from "@/components/table/SimpleTable"
import { Category } from "@/libs/types/category";
import { Button, Card, CardBody, Container, Flex, Heading } from "@chakra-ui/react"
import {ColumnDef, Table, getCoreRowModel, getFilteredRowModel, getSortedRowModel, useReactTable} from "@tanstack/react-table";
import Link from "next/link";
import { useMemo } from "react";
import { FiEdit, FiEye, FiTrash } from "react-icons/fi";
interface ListCategoriesProps {
    params : {

    },

    searchParams : {

    }
}


interface CategoryColumn {
    id: string
    name: string
    description: string
    createdAt: string
    updatedAt: string
    action: string
}


export default function ListCategories({} : ListCategoriesProps) {

    const columns: ColumnDef<CategoryColumn>[] = useMemo<ColumnDef<CategoryColumn>[]>(
        () => [
            {
                id: "id",
                header: "Id",
                accessorFn: (row) => row.id,
                cell: (info) => info.getValue()
            },
            {
                id: "name",
                header: "Name",
                enableColumnFilter: true,
                enableSorting: true,
                accessorFn: (row) => row.name,
                cell: (info) => info.getValue()
            }, {
                id: "description",
                header: "Description",
                enableColumnFilter: true,
                enableSorting: true,
                accessorFn: (row) => row.description,
                cell: (info) => info.getValue()
            },

            {
                id: "action",
                header: "Action",
                accessorFn: (row) => row,
                cell: (info) => <>
                    <Link href={"categories/edit/" + info.getValue<Category>().id}>
                        <Button colorScheme="blue" size={"sm"} me={"3px"}> <FiEdit></FiEdit></Button>
                    </Link>
                    <Link href={"categories/details/" + info.getValue<Category>().id}>
                        <Button colorScheme="green" size={"sm"} me={"3px"}><FiEye></FiEye></Button>
                    </Link>
                    <Button colorScheme="red" size={"sm"} me={"3px"} onClick={() => {
                        
                    }}> <FiTrash></FiTrash></Button>
                </>
            }
        ], []
    )

    const table = useReactTable({
        data: [
            {
                id : "fahmi",
                name : "test",
                description :"dadada",
                createdAt : "123",
                updatedAt: "123",
                action: ""
            },
            {
                id : "fahmi",
                name : "test",
                description :"dadada",
                createdAt : "123",
                updatedAt: "123",
                action: ""
            },
            {
                id : "fahmi",
                name : "test",
                description :"dadada",
                createdAt : "123",
                updatedAt: "123",
                action: ""
            },
            {
                id : "fahmi",
                name : "test",
                description :"dadada",
                createdAt : "123",
                updatedAt: "123",
                action: ""
            }
        ],
        columns,
        manualPagination: true,
        manualSorting: true,
        manualFiltering: true,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        debugTable: true
    })

    return <Container maxW={"auto"} mt={5}>
        <Card>
            <CardBody>
                <Flex justifyContent={"space-between"}>
                <Heading size={"md"} mb={4} >
                    Categories
                </Heading>
                <Button size={"sm"} colorScheme="blue">Create</Button>
                </Flex>
                <SimpleTable table={table}>

                </SimpleTable>
            </CardBody>
        </Card>

    </Container>

}