const { Router } = require("express");

module.exports = function ({ IdeaController }) {
  const router = Router();

  router.get("/:ideaId", IdeaController.get);
  router.get("/:ideaId/all", IdeaController.getUserIdeas);
  router.get("", IdeaController.getAll);
  router.post("/:ideaId", IdeaController.create);
  router.patch("/:ideaId", IdeaController.update);
  router.delete("/:ideaId", IdeaController.delete);
  router.post(":ideaId/upvote", IdeaController.upvoteIdea);
  router.post(":ideaId/downvote", IdeaController.downvoteIdea);

  return router;
};
