export interface User {
    firstName: string
    email: string
    id: string
    createAt: any
}

export interface AuthState {
    user: User | null
    authenticated: boolean
    loading: boolean
    error: string
    success: string
}

















