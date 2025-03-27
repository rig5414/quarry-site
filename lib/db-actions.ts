"use server"

import { sql } from "@vercel/postgres"
import { notFound } from "next/navigation"

export type ProductType = {
  id: number
  name: string
  description: string
  color: string
  size_options: string
  weight: string
  image: string
  application: string
  category: string
  created_at?: string
}

export async function getAllProducts(): Promise<ProductType[]> {
  try {
    const { rows } = await sql`
      SELECT * FROM products ORDER BY category, name
    `
    return rows as ProductType[]
  } catch (error) {
    console.error("Database error:", error)
    return []
  }
}

export async function getProductsByCategory(category: string): Promise<ProductType[]> {
  try {
    const { rows } = await sql`
      SELECT * FROM products WHERE category = ${category} ORDER BY name
    `
    return rows as ProductType[]
  } catch (error) {
    console.error("Database error:", error)
    return []
  }
}

export async function getProductById(id: number): Promise<ProductType> {
  try {
    const { rows } = await sql`
      SELECT * FROM products WHERE id = ${id}
    `

    if (rows.length === 0) {
      notFound()
    }

    return rows[0] as ProductType
  } catch (error) {
    console.error("Database error:", error)
    notFound()
  }
}

export async function getRelatedProducts(id: number, category: string, limit = 3): Promise<ProductType[]> {
  try {
    const { rows } = await sql`
      SELECT * FROM products 
      WHERE id != ${id} AND category = ${category}
      ORDER BY RANDOM()
      LIMIT ${limit}
    `
    return rows as ProductType[]
  } catch (error) {
    console.error("Database error:", error)
    return []
  }
}

