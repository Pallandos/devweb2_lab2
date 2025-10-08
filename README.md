# DevWeb2 - Lab2 - `next.js`

Jean CAYLUS

### Activity 1

In the **V2** type we mask some fields, because we might have differents clients accessing our API. For example customers VS employees...

### Activity 2

I added a `POST` endpoint to the *classic* API (v1).

### Activity 3

I created helper function to handle the file reading and made the requests function to use the file handler. Now all data is stored inside a `products.json` database. 

### Activity 4

I added PUT endpoint, which is valide if any combination of `price`, `description` and `price`. It will updates the product object with a 200 status. 

### Activity 5

The new route for search is `GET /api/products/search`. It takes one or more of the following parameters:

- `name` (str) : **case-sensitive** name search
- `minPrice` : min price
- `maxPrice` : max price

Example : `/api/products/search?name=tv&maxPrice=600` search for a products which name includes *tv* and has a price less to 600.