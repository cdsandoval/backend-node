const BaseReposity = require("./base.repository");
let _idea = null;

class IdeaRepository extends BaseReposity {
  constructor({ Idea }) {
    super(Idea);
    _user = Idea;
  }

  async getUserIdeas(author) {
    return await _idea.find({ author });
  }
}

module.exports = IdeaRepository;
