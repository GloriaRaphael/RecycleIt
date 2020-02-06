const router = require("express").Router();
const userRoutes = require("./userRoutes");
const appointmentRoutes = require("./appointmentRoutes");

module.exports = function(app) {
  router.get("/test", (req, res) => {
    res.send("yehh!");
  });

  router.use("/users", userRoutes());
  router.use("/appointments", appointmentRoutes());

  return router;
};
