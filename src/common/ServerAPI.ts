export type AuthService = "facebook" | "google"

export interface IAuthRequest {
    service: AuthService
    token: string,
    userId?: string
}

export interface IAuthResponse {
    result: boolean;
}

export interface IIssueRequest {
    label?: string,
    description: string,
    captchaToken: string
}

export interface IIssueResponse {
    url?: string
}