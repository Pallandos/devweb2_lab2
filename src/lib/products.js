// lib/products.js

import fs from 'fs/promises';
import path from 'path';

const PRODUCTS_FILE = path.join(process.cwd(), 'data', 'products.json');

async function readProducts() {
    try {
        const data = await fs.readFile(PRODUCTS_FILE, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading products file:', error);
        return [];
    }
}

async function writeProducts(products) {
    try {
        await fs.writeFile(PRODUCTS_FILE, JSON.stringify(products, null, 2));
    } catch (error) {
        console.error('Error writing products file:', error);
        throw error;
    }
}

export async function getAllProducts() {
    return await readProducts();
}

export async function getProductById(id) {
    const products = await readProducts();
    return products.find(product => product.id === id);
}

export async function addProduct(productData) {
    const products = await readProducts();
    const newId = (products.length + 1).toString();
    const newProduct = { id: newId, ...productData };
    products.push(newProduct);
    await writeProducts(products);
    return newProduct;
}