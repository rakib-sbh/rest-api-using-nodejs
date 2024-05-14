const {
  rootGetController,
  rootErrorController,
  rootServerErrorController,
} = require("../controllers/root.controller");

const rootRouter = require("express").Router();

rootRouter.get("/", rootGetController);

rootRouter.use(rootErrorController);
rootRouter.use(rootServerErrorController);

module.exports = rootRouter;
