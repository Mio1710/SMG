export type Query = {
  take?: number;
  offset?: number;
  order?: string;
  sort?: string;
};

export interface BaseEntity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date | null;
  isDeleted?: boolean;
}
