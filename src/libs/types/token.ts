export interface User {
    id: string
    firstName: string
    lastName: string
    email: string
    roles: string[]
    createdAt: string
    updatedAt: string
    token : Token
}

export interface Token {
    accessToken: string
    refreshToken: string
    expireIn: number
}
