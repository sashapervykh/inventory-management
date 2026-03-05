export interface User {
  id: string;
  firstName: string;
  lastName: string | null;
  fullName: string;
  lastLoginAt: string;
  createdAt: string;
  type: "user" | "admin";
  email: string;
}
