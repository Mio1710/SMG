import { model, Schema } from "mongoose";

const courseSchema = new Schema({
  // set auto increment for id
  id: { type: Number, autoIncrement: true, unique: true },
  name: { type: String, length: 255 },
  description: { type: String, length: 600 },
  image: { type: String, length: 255 },
  // created_at: { type: Date, default: Date.now },
  // updated_at: { type: Date, default: Date.now },
});

export const Course = model("Course", courseSchema);
