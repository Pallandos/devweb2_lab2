// api/products/route.js

import { NextResponse } from 'next/server';
import { getAllProducts, getProductById } from '../../../lib/products';

// GET API endpoint

export async function GET() {
    const products = getAllProducts();
    return NextResponse.json(products, { status: 200 });
}