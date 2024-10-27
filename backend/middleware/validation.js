const Joi = require("joi");

module.exports = (schema) => (req, res, next) => {
  // console.log(req.body);

  // console.log(req.files);

  // if (req.body && req.body._parts) {
  //   const parsedBody = {};

  //   req.body._parts.forEach(([key, value]) => {
  //     try {
  //       parsedBody[key] = JSON.parse(value);
  //     } catch (e) {
  //       parsedBody[key] = value;
  //     }
  //   });

  //   req.body = parsedBody;
  // }
  // console.log(req.body);

  next();
};
