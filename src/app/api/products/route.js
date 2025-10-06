// api/products/route.js

import { NextResponse } from 'next/server';
import { getAllProducts, getProductById, addProduct } from '../../../lib/products';

// GET API endpoint

export async function GET() {
    const products = getAllProducts();
    return NextResponse.json(products, { status: 200 });
}

// POST API endpoint
export async function POST(request) {
    try {
        const body = await request.json();
        const { name, description, price } = body;

        // Validate required fields
        if (!name || !description || price === undefined) {
            return NextResponse.json({ error: 'Missing required fields: name, description, price' }, { status: 400 });
        }

        // Validate price is a number
        if (typeof price !== 'number' || price < 0) {
            return NextResponse.json({ error: 'Price must be a positive number' }, { status: 400 });
        }

        // Add the product
        const newProduct = addProduct({ name, description, price });

        return NextResponse.json(newProduct, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
    }
}