// src/app/api/v3/products/route.js

import { NextResponse } from "next/server";
import { getAllProducts } from "@/lib/products";
import { paginate } from "@/lib/pagination";
import { ProductCollection } from "@/lib/transformers";

export async function GET(request) {
    const { searchParams } = new URL(request.url);

    const page = parseInt(searchParams.get("page")) || 1;
    const perPage = parseInt(searchParams.get("perPage")) || 2;

    const allProducts = getAllProducts();
    const paginatedResults = paginate(allProducts, page, perPage);

    const collection = new ProductCollection(
        paginatedResults.data,
        { pagination: paginatedResults.pagination }
    );

    return NextResponse.json(collection.toResponse());
}
