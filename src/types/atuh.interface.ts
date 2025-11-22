import { JwtPayload } from "jwt-decode";

export interface TCustomJwtPayload extends JwtPayload {
  id: string;
  email: string;
  role: string;
  profilePhoto: string;
  fullName: string;
  iat: number;
  exp: number;
}
