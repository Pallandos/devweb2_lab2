// src/app/api/products/[id]/route.js

import { NextResponse } from 'next/server';
import { getProductById, updateProduct } from '@/lib/products';

// GET API endpoint for a specific product by ID

export async function GET (request, { params }) {
    const { id } = params;
    const product = getProductById(id);

    if (!product) {
        return NextResponse.json({ message: 'Product not found' }, { status: 404 });
    }
    
    return NextResponse.json(product, { status: 200 });
}

// PUT API endpoint for updating a specific product by ID
export async function PUT(request, { params }) {
    try {
        const { id } = params;
        const body = await request.json();
        const { name, description, price } = body;

        // Check if at least one field is provided
        if (name === undefined && description === undefined && price === undefined) {
            return NextResponse.json({ error: 'At least one field (name, description, or price) must be provided' }, { status: 400 });
        }

        // Validate types if provided
        if (name !== undefined && typeof name !== 'string') {
            return NextResponse.json({ error: 'Name must be a string' }, { status: 400 });
        }
        if (description !== undefined && typeof description !== 'string') {
            return NextResponse.json({ error: 'Description must be a string' }, { status: 400 });
        }
        if (price !== undefined && (typeof price !== 'number' || price < 0)) {
            return NextResponse.json({ error: 'Price must be a positive number' }, { status: 400 });
        }

        // Update the product
        const updatedProduct = await updateProduct(id, { name, description, price });

        if (!updatedProduct) {
            return NextResponse.json({ message: 'Product not found' }, { status: 404 });
        }

        return NextResponse.json(updatedProduct, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
    }
}