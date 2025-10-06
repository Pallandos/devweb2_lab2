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