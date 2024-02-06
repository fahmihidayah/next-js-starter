import { Category } from "@/features/categories/data/types"
import { z } from "zod"

export interface Post {
    id: number
    title: string
    content: string
    category_id: number
    createdAt: string
    updatedAt: string
    category: Category
}

export interface PostForm {
    id?: number;
    title : string;
    content: string;
    category_id : string;
}

export const postValidationSchema = z.object({
    title: z.string().min(3),
    category_id : z.string(),
    content: z.string().min(10),

})