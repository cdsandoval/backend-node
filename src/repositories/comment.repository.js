const BaseReposity = require("./base.repository");
let _comment = null;

class CommentRepository extends BaseReposity {
  constructor({ Comment }) {
    super(Comment);
    _user = Comment;
  }
}

module.exports = CommentRepository;
