import { Router } from "express";
import { Article } from "../dataBaseModels/article";

const router = Router();

const checkForHexRegExp = new RegExp("^[0-9a-fA-F]{24}$");

router.post("/create", async (req, res) => {
  try {
    const article = new Article({
      title: req.body.title,
      htmlContent: req.body.htmlContent,
      rating: 0,
      comments: [],
    });

    await article.save();
    res.sendStatus(201);
  } catch (e) {
    res.sendStatus(500);
  }
});

router.post("/query", async (req, res) => {
  const { skip, take } = req.body;

  try {
    const articles = await Article.find().select(
      "title htmlContent creationDate rating"
    );

    const startFrom = skip === 0 ? skip : skip - 1;
    const end = startFrom + take;

    const responseData = articles
      .map((article) => article.toClient())
      .slice(startFrom, end);
    await res.json(responseData);
  } catch (e) {
    res.sendStatus(500);
  }
});

router.get("/get", async (req, res) => {
  try {
    const articles = await Article.find().select(
      "title htmlContent creationDate rating"
    );

    const responseData = articles.map((article) => article.toClient());
    await res.json(responseData);
  } catch (e) {
    res.sendStatus(500);
  }
});

router.get("/get/:id", async (req, res) => {
  try {
    if (!checkForHexRegExp.test(req.params.id)) {
      return res.sendStatus(400);
    }

    const article = await Article.findById(req.params.id).select(
      "title htmlContent creationDate rating comments"
    );

    if (!article) {
      return res.sendStatus(400);
    }

    res.json(article.toClient());
  } catch (e) {
    res.sendStatus(500);
  }
});

router.post("/edit", async (req, res) => {
  const { id, title, comments, htmlContent, creationDate } = req.body;

  if (!title || !comments || !htmlContent || !creationDate) {
    return res.sendStatus(400);
  }

  if (!checkForHexRegExp.test(id)) {
    return res.sendStatus(400);
  }

  try {
    delete req.body.id;
    const article = await Article.findById(id);

    Object.assign(article, req.body);
    await article.save();
    res.sendStatus(200);
  } catch (e) {
    res.sendStatus(500);
  }
});

router.post("/remove", async (req, res) => {
  const { id } = req.body;

  if (!checkForHexRegExp.test(id)) {
    return res.sendStatus(400);
  }

  try {
    await Article.deleteOne({
      _id: req.body.id,
    });
    res.sendStatus(200);
  } catch (e) {
    res.sendStatus(500);
  }
});

export default router;
