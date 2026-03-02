export interface User {
  id: string;
  firstName: string;
  lastName: string;
  lastLoginAt: string;
  createdAt: string;
  type: "user" | "admin";
  email: string;
}
