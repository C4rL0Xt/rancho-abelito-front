import { ClienteData } from "./clienteData.model";

export interface SignUpRequest {
    username: string,
    email: string,
    password: string,
    role: string[],
    clienteData: ClienteData
}