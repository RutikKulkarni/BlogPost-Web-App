import mongoose, { Document, Schema } from "mongoose";
import { IUser } from "./User";

export interface IBlog extends Document {
  title: string;
  content: string[];
  location: string;
  author: IUser["_id"];
  createdAt: Date;
}

const blogSchema: Schema<IBlog> = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: [String], required: true },
  location: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<IBlog>("Blog", blogSchema);
