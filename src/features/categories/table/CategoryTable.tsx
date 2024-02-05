'use client'
import SimpleTable from "@/components/table/SimpleTable"
import { Category } from "@/libs/types/category"
import { Button } from "@chakra-ui/react"
import { ColumnDef, getCoreRowModel, getFilteredRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table"
import Link from "next/link"
import { useMemo } from "react"
import { FiEdit, FiEye, FiTrash } from "react-icons/fi"

interface CategoryColumn {
    id: string
    name: string
    description: string
    createdAt: string
    updatedAt: string
    action: string
}

export interface CategoryTableProps {
    data : Category[];
}

export default function CategoryTable({data} : CategoryTableProps) {
    const columns: ColumnDef<Category>[] = useMemo<ColumnDef<Category>[]>(
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
                    <Link href={"categories/" + info.getValue<Category>().id + "/edit"} >
                        <Button colorScheme="blue" size={"sm"} me={"3px"}> <FiEdit></FiEdit></Button>
                    </Link>
                    <Link href={"categories/" + info.getValue<Category>().id}>
                        <Button colorScheme="green" size={"sm"} me={"3px"}><FiEye></FiEye></Button>
                    </Link>
                    <Button colorScheme="red" size={"sm"} me={"3px"} onClick={() => {

                    }}> <FiTrash></FiTrash></Button>
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