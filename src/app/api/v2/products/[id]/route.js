// /src/app/api/v2/products/[id]/route.js
import { NextResponse } from 'next/server';
import { ProductRessource } from '@/lib/transformers';
import { getProductById } from '@/lib/products';

export async function GET(request, { params }) {
    const { id } = params;
    const product = getProductById(id);

    if (!product) {
        return NextResponse.json({ message: 'Product not found' }, { status: 404 });
    }

    const transformedProduct = new ProductRessource(product).transform();
    return NextResponse.json(transformedProduct, { status: 200 });
}