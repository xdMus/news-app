import { Schema, model } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  name: String,
  password: {
    type: String,
    required: true,
  },
  resetToken: String,
  resetTokenExp: Date,
  favorites: [
    {
      articleId: {
        type: Schema.Types.ObjectId,
        ref: "Article",
      },
    },
  ],
});

export const User = model("User", userSchema);
