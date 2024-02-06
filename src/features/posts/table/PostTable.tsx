'use client'
import SimpleTable from "@/components/table/SimpleTable"
import { Button } from "@chakra-ui/react"
import { ColumnDef, getCoreRowModel, getFilteredRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table"
import Link from "next/link"
import { useMemo } from "react"
import { FiEdit, FiEye, FiTrash } from "react-icons/fi"
import { Post } from "../data/types"

export interface PostTableProps {
    data : Post[];
}

export default function PostTable({data} : PostTableProps) {
    const columns: ColumnDef<Post>[] = useMemo<ColumnDef<Post>[]>(
        () => [
            {
                id: "id",
                header: "Id",
                accessorFn: (row) => row.id,
                cell: (info) => info.getValue()
            },
            {
                id: "title",
                header: "Title",
                enableColumnFilter: true,
                enableSorting: true,
                accessorFn: (row) => row.title,
                cell: (info) => info.getValue()
            }, {
                id: "content",
                header: "Content",
                enableColumnFilter: true,
                enableSorting: true,
                accessorFn: (row) => (row.content.length > 50 ? `${row.content.substring(9, 50)}...` : row.content),
                cell: (info) => info.getValue()
            },

            {
                id: "action",
                header: "Action",
                accessorFn: (row) => row,
                cell: (info) => <>
                    <Link href={"posts/" + info.getValue<Post>().id + "/edit"} >
                        <Button colorScheme="blue" size={"sm"} me={"3px"}> <FiEdit></FiEdit></Button>
                    </Link>
                    <Link href={"posts/" + info.getValue<Post>().id}>
                        <Button colorScheme="green" size={"sm"} me={"3px"}><FiEye></FiEye></Button>
                    </Link>
                    <Link href={"posts/" + info.getValue<Post>().id + "/delete"} >
                    <Button colorScheme="red" size={"sm"} me={"3px"} > <FiTrash></FiTrash></Button>
                    </Link>
                  
                </>
            }
        ], []
    );

    const table = useReactTable({
        data: data,
        columns,
        manualPagination: true,
        manualSorting: true,
        manualFiltering: true,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        debugTable: true
    })
    return <SimpleTable table={table}></SimpleTable>
}