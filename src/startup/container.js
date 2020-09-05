const { createContainer, asClass, asValue, asFunction } = require("awilix");
const {
  HomeService,
  CommentService,
  IdeaService,
  UserService,
  AuthService,
} = require("../services");
const {
  HomeController,
  CommentController,
  IdeaController,
  UserController,
  AuthController,
} = require("../controllers");
const {
  HomeRoutes,
  UserRoutes,
  IdeaRoutes,
  CommentRoutes,
  AuthRoutes,
} = require("../routes/index.routes");
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
    User: asValue(User),
    Idea: asValue(Idea),
    Comment: asValue(Comment),
  })
  .register({
    HomeService: asClass(HomeService).singleton(),
    CommentService: asClass(CommentService).singleton(),
    IdeaService: asClass(IdeaService).singleton(),
    UserService: asClass(UserService).singleton(),
    AuthService: asClass(AuthService).singleton(),
  })
  .register({
    HomeController: asClass(HomeController.bind(HomeController)).singleton(),
    UserController: asClass(UserController.bind(UserController)).singleton(),
    IdeaController: asClass(IdeaController.bind(IdeaController)).singleton(),
    CommentController: asClass(
      CommentController.bind(CommentController)
    ).singleton(),
    AuthController: asClass(AuthController.bind(AuthController)).singleton(),
  })
  .register({
    HomeRoutes: asFunction(HomeRoutes).singleton(),
    UserRoutes: asFunction(UserRoutes).singleton(),
    CommentRoutes: asFunction(CommentRoutes).singleton(),
    IdeaRoutes: asFunction(IdeaRoutes).singleton(),
    AuthRoutes: asFunction(AuthRoutes).singleton(),
  })
  .register({
    CommentRepository: asClass(CommentRepository).singleton(),
    IdeaRepository: asClass(IdeaRepository).singleton(),
    UserRepository: asClass(UserRepository).singleton(),
  });

module.exports = container;
