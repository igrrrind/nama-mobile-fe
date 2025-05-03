const BASE_URL = 'products'

export const PRODUCT_API = {
    GET_ALL: `${BASE_URL}`,
    GET_SLUG:  (slug: string) => `${BASE_URL}/${slug}`,
    GET_BY_BRAND_ANDOR_MODEL: (brandSlug: string, modelSlug?: string, paginate?: PageReq) => {
        let url = `${BASE_URL}/brand-model?brandSlug=${brandSlug}`;
        if (modelSlug) {
            url += `&modelSlug=${modelSlug}`;
        }
        if (paginate) url+=`page=${paginate?.page}&pageSize=${paginate?.pageSize}`
        return url;
    }
}