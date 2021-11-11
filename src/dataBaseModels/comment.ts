import { Schema, model } from "mongoose";

const commentSchema = new Schema({
  textContent: {
    type: String,
    required: true,
  },
  creationDate: {
    type: Date,
    required: true,
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

export const Comment = model("Comment", commentSchema);
