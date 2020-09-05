const BaseReposity = require("./base.repository");
let _user = null;

class IdeaRepository extends BaseReposity {
  constructor({ Idea }) {
    super(Idea);
    _user = Idea;
  }

  async getUserIdeas(author) {
    return await _user.find({ author });
  }
}

module.exports = IdeaRepository;
