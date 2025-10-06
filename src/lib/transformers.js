// /src/lib/transformers.js

export class ProductRessource {
    constructor(product) {
        this.product = product;
    }

    transform() {
        return {
            id: this.product.id,
            name: this.product.name,
            // We exclude price and description
        }
    }

    static collection(products) {
        return products.map(product => {
            const ressource = new ProductRessource(product);
            return ressource.transform();
        });
    }
}

export class ProductCollection {
    constructor(products, metadatas = {}) {
        this.products = products;
        this.metadatas = metadatas;
    }

    toResponse() {
        return {
            data: ProductRessource.collection(this.products),
            meta: {
                total: this.products.length,
                storeName: "Megastore",
                storeProductsLink: "https://megastore.com/products",
                ...this.metadatas
            }
        }
    }
}