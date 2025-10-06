// src/app/api/v3/products/route.js

import { NextResponse } from "next/server";
import { getAllProducts } from "@/lib/products";
import { ProductCollection } from "@/lib/transformers";

export async function GET(request) {
    const products = getAllProducts();
    const productCollection = new ProductCollection(products);
    return NextResponse.json(productCollection.toResponse(), { status: 200 });
}