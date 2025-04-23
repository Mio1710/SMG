import { model, Schema } from "mongoose";

const UserSchema = new Schema({
  id: { type: String, unique: true },
  name: { type: String, required: true, length: 255 },
  email: { type: String, required: true, unique: true, length: 255 },
  password: { type: String, required: true, length: 255 },
  refreshtoken: { type: String, length: 255 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  deletedAt: { type: Date, default: null },
  isActive: { type: Boolean, default: true },
  role: { type: String, default: "Admin" },
});

export const User = model("User", UserSchema);
