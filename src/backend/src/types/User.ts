import { BaseEntity } from "./common";

export interface User extends BaseEntity {
  id: string;
  name: string;
  email: string;
  password: string;
  refreshtoken: string | null;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  isActive: boolean;
  role: string;
}
