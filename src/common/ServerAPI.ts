export type AuthService = "facebook" | "google"

export interface IAuthRequest {
    service: AuthService
    token: string,
    userId?: string
}

export interface IAuthResponse {
    result: boolean;
}