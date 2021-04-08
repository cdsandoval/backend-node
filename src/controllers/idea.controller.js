let _ideaService = null;

class IdeaController {
  constructor({ IdeaService }) {
    _ideaService = IdeaService;
  }

  async get(req, res) {
    const { userId } = req.params;
    const user = await _ideaService.get(userId);
    return res.send(user);
  }

  async getAll(req, res) {
    const { pageSize, pageNum } = req.query;
    const users = await _ideaService.getAll(pageSize, pageNum);
    return res.send(users);
  }

  async create(req, res) {
    const { body } = req;
    const createdIdea = await _ideaService.create(body);
    return res.status(201).send(createdIdea);
  }

  async update(req, res) {
    const { body } = req;
    const { userId } = req.params;
    const updateIdea = await _ideaService.update(userId, body);
    return res.send(updateIdea);
  }

  async delete(req, res) {
    const { userId } = req.params;
    const deleteIdea = await _ideaService.delete(userId);
    return res.send(deleteIdea);
  }

  async getUserIdeas(req, res) {
    const { userId } = req.params;
    const ideas = await _ideaService.getUserIdeas(userId);
    return res.send(ideas);
  }

  async upvoteIdea(req, res) {
    const { ideaId } = req.params;
    const idea = await _ideaService.updateIdea(ideaId);
    return res.send(idea);
  }

  async downvoteIdea(req, res) {
    const { ideaId } = req.params;
    const idea = await _ideaService.updateIdea(ideaId);
    return res.send(idea);
  }
}

module.exports = IdeaController;
