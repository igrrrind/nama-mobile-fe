const BASE_URL = 'models'

export const MODEL_API = {
    GET_ALL: (page?: number, pageSize?: number) => `${BASE_URL}?page=${page ?? 1}&&pageSize=${pageSize ?? 10}`,
    CREATE: `${BASE_URL}`,
    GET_BY_NAME: (name: string) => `${BASE_URL}/by-name?name=${name}`,
    GET_BY_BRAND: (id: string) => `${BASE_URL}/by-brand?brandId=${id}`,
    GET_BY_ID: (id: string) => `${BASE_URL}/${id}`,
    UPDATE_BY_ID: (id: string) => `${BASE_URL}/${id}`,
    DELETE_BY_ID: (id: string) => `${BASE_URL}/${id}`,
    GET_BY_SLUG: (slug: string) => `${BASE_URL}/by-slug/${slug}`,
}
