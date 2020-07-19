const { createContainer, asClass, asValue, asFunction } = require("awilix");
const { HomeService } = require("../services");
const { HomeController } = require("../controllers");
const { HomeRoutes } = require("../routes/index.routes");
const Routes = require("../routes");
const config = require("../config");
const app = require("./index");
const { Comment, Idea, User } = require("../models");
const {
  CommentRepository,
  IdeaRepository,
  UserRepository,
} = require("../repositories");

const container = createContainer();

container
  .register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config),
  })
  .register({
    HomeService: asClass(HomeService).singleton(),
  })
  .register({
    HomeController: asClass(HomeController.bind(HomeController)).singleton(),
  })
  .register({
    HomeRoutes: asFunction(HomeRoutes).singleton(),
  })
  .register({
    User: asValue(User),
    Idea: asValue(Idea),
    Comment: asValue(Comment),
  })
  .register({
    CommentRepository: asClass(CommentRepository).singleton(),
    IdeaRepository: asClass(IdeaRepository).singleton(),
    UserRepository: asClass(UserRepository).singleton(),
  });

module.exports = container;
