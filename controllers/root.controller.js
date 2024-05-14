const path = require("path");

const rootGetController = (req, res) => {
  const filePath = path.join(__dirname, "/../views/homePage.html");
  res.sendFile(filePath);
};

const rootErrorController = (_req, res, _next) => {
  res.json({
    message: "Error occurred",
  });
};

const rootServerErrorController = (_err, _req, res, _next) => {
  res.status(500).json({
    message: "Server error occurred",
  });
};

module.exports = {
  rootGetController,
  rootErrorController,
  rootServerErrorController,
};
