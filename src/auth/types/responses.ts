export interface AuthResponse {
  readonly accessToken: string;
}

export interface ApiError {
  message: string;
  errors?: Record<string, string[]>;
}

export interface ApiSuccess<T> {
  data: T;
}

export interface MessageResponse {
  readonly message: string;
}
