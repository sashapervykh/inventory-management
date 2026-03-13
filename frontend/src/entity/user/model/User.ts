export interface User {
  id: string;
  firstName?: string;
  lastName?: string;
  type: "admin" | "user" | "none";
  email: string;
}
