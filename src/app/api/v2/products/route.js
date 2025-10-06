// /src/app/api/v2/products/route.js

import { NextResponse } from 'next/server';
import { getAllProducts } from '@/lib/products';
import { ProductRessource } from '@/lib/transformers';

export async function GET() {
    const products = getAllProducts();
    const transformedProducts = ProductRessource.collection(products);
    return NextResponse.json(transformedProducts);
}