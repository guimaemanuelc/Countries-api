const enums = {
    BASE_URL: 'https://restcountries.com/v3.1'
}

const endpoints = {
    ALL: '/all',
    GET: (id) => `/alpha/${id}`
}

export {enums, endpoints};