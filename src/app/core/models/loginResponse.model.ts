export interface LoginResponse {
    jwtToken: string,
    username: string,
    roles: string[]
}