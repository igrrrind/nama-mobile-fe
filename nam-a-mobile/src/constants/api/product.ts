const BASE_URL = 'api/product'

export const PRODUCT_API = {
    GET_ALL: `${BASE_URL}`,
    GET_SLUG:  (slug: string) => `${BASE_URL}/${slug}` 
}