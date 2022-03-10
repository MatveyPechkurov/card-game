export interface Todo {
  id: string;
  value: string;
  checked: boolean;
}
export interface AuthData {
  name: string;
  password: string;
}
export interface User {
  name: string;
  id: string;
  token?: string;
}
