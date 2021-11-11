import { Schema, model } from "mongoose";

const articleSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  htmlContent: {
    type: String,
    required: true,
  },
  creationDate: {
    type: Date,
    default: Date.now,
  },
  rating: {
    type: Number,
    required: true,
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
});

articleSchema.method("toClient", function () {
  const article = this.toObject();

  article.id = article._id;
  delete article._id;

  return article;
});

export const Article = model("Article", articleSchema);
