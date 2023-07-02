
interface CreateUserRequest {
    email: string;
    password: string;
}

interface LoginRequest {
    email: string;
    password: string;
}

interface UserToken {
    token: string;
}