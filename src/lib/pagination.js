// /src/lib/pagination.js

export function paginate(items, page =  1, perPage = 2) {
    const offset = (page - 1) * perPage;
    const paginatetItems = items.slice(offset, offset + perPage);

    return {
        data: paginatetItems,
        pagination: {
            currentPage: page,
            perPage: perPage,
            total: items.length,
            totalPages: Math.ceil(items.length / perPage),
            hasNextPage: page < Math.ceil(items.length / perPage),
            hasPrevPage: page > 1
        }
    }
}