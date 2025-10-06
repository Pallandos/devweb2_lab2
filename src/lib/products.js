// lib/products.js 

export const products = [ 
    { id: "1", name: "TV", description: "Best TV", price: 499.99}, 
    { id: "2", name: "iPhone", description: "Best iPhone", price: 999.99}, 
    { id: "3", name: "Chromecast", description: "Best Chromecast", price: 35.98}, 
    { id: "4", name: "Glasses", description: "Best Glasses", price: 150.00} 
]; 

export function getAllProducts() { 
    return products; 
} 

export function getProductById(id) { 
    return products.find(product => product.id === id);
} 