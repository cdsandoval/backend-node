const BaseReposity = require("./base.repository");
let _user = null;

class UserRepository extends BaseReposity {
  constructor({ User }) {
    super(User);
    _user = User;
  }

  async getUserbyUsername(username) {
    return await _user.findOne({ username });
  }
}

module.exports = UserRepository;
