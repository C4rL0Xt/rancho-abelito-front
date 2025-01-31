export interface LoginResponse {
    jwtToken: string,
    idCliente: string,
    username: string,
    roles: string[]
}