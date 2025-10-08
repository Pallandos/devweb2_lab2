// src/app/api/products/search/route.js

import { NextResponse } from 'next/server';
import { searchProducts } from '@/lib/products';

// GET API endpoint for searching products
export async function GET(request) {
    const { searchParams } = new URL(request.url);
    
    const name = searchParams.get('name');
    const minPrice = searchParams.get('minPrice');
    const maxPrice = searchParams.get('maxPrice');
    
    // Parse numeric parameters
    const filters = {};
    if (name) filters.name = name;
    if (minPrice !== null) {
        const minPriceNum = parseFloat(minPrice);
        if (!isNaN(minPriceNum)) {
            filters.minPrice = minPriceNum;
        }
    }
    if (maxPrice !== null) {
        const maxPriceNum = parseFloat(maxPrice);
        if (!isNaN(maxPriceNum)) {
            filters.maxPrice = maxPriceNum;
        }
    }
    
    const products = await searchProducts(filters);
    return NextResponse.json(products, { status: 200 });
}