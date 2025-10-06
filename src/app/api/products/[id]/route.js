// src/app/api/products/[id]/route.js

import { NextResponse } from 'next/server';
import { getProductById } from '@/lib/products';

// GET API endpoint for a specific product by ID

export async function GET (request, { params }) {
    const { id } = params;
    const product = getProductById(id);

    if (!product) {
        return NextResponse.json({ message: 'Product not found' }, { status: 404 });
    }
    
    return NextResponse.json(product, { status: 200 });
}